using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Reflection;
using System.Threading.Tasks;

namespace TimeSheet
{
    public class MultipartMediaTypeFormatter : FormUrlEncodedMediaTypeFormatter
    {
        //uploads forms with files and data..
        private const string StringMultipartMediaType = "multipart/form-data";

        //for uploading files only...
        private const string StringApplicationMediaType = "application/octet-stream";

        public MultipartMediaTypeFormatter()
        {
            SupportedMediaTypes.Add(new MediaTypeHeaderValue(StringMultipartMediaType));
            SupportedMediaTypes.Add(new MediaTypeHeaderValue(StringApplicationMediaType));
        }

        public override bool CanReadType(Type oType)
        {
            return true;
        }

        public override bool CanWriteType(Type oType)
        {
            return true;
        }

        public override async Task<object> ReadFromStreamAsync(Type oType, Stream readStream, HttpContent oHttpContent, IFormatterLogger oIFormatterLogger)
        {
            var varParts = await oHttpContent.ReadAsMultipartAsync();
            var varObject = Activator.CreateInstance(oType);
            var varPropertiesFromObj = varObject.GetType().GetRuntimeProperties().ToList();

            foreach (var varProperty in varPropertiesFromObj.Where(x => x.PropertyType == typeof(ContentModel)))
            {
                var varFile = varParts.Contents.FirstOrDefault(x => x.Headers.ContentDisposition.Name.Contains(varProperty.Name));

                if (varFile == null || varFile.Headers.ContentLength <= 0) continue;

                var fileModel = new ContentModel(varFile.Headers.ContentDisposition.FileName, Convert.ToInt32(varFile.Headers.ContentLength), ReadFully(varFile.ReadAsStreamAsync().Result));
                varProperty.SetValue(varObject, fileModel);
            }

            foreach (var varProperty in varPropertiesFromObj.Where(x => x.PropertyType != typeof(ContentModel)))
            {
                var varFormData = varParts.Contents.FirstOrDefault(x => x.Headers.ContentDisposition.Name.Contains(varProperty.Name));
                if (varFormData == null) 
                    continue;
                var varResultValue = varFormData.ReadAsStringAsync().Result;
                var varValueType = Nullable.GetUnderlyingType(varProperty.PropertyType) ?? varProperty.PropertyType;
                var varTypeValue = Convert.ChangeType(varResultValue, varValueType);
                varProperty.SetValue(varObject, varTypeValue);
            }
            return varObject;
        }

        private byte[] ReadFully(Stream streamInput)
        {
            var varBuffer = new byte[16 * 1024];
            using (var varMemorySystem = new MemoryStream())
            {
                int nRead;
                while ((nRead = streamInput.Read(varBuffer, 0, varBuffer.Length)) > 0)
                    varMemorySystem.Write(varBuffer, 0, nRead);
                return varMemorySystem.ToArray();
            }
        }
    }

    public class ContentModel
    {
        public ContentModel(string strFileName, int nContentLength, byte[] byteContent)
        {
            Filename = strFileName;
            ContentLength = nContentLength;
            Content = byteContent;
        }

        public string Filename { get; set; }
        public int ContentLength { get; set; }
        public byte[] Content { get; set; }
    }
}