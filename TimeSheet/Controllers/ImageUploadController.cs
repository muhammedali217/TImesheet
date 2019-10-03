using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;


namespace TimeSheet.Controllers
{
    public class ImageUploadController : ApiController
    {
        [HttpPost]
        [AcceptVerbs("GET", "POST")]
        public async Task<HttpResponseMessage> FileUpload()
        {
            try
            {
                int nLength = 8;
                char[] AvailableCharacters = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
                char[] identifier = new char[nLength];
                byte[] randomData = new byte[nLength];

                using (RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider())
                {
                    rng.GetBytes(randomData);
                }

                for (int idx = 0; idx < identifier.Length; idx++)
                {
                    int pos = randomData[idx] % AvailableCharacters.Length;
                    identifier[idx] = AvailableCharacters[pos];
                }

                string strFileName = new string(identifier);

                //pick file with name: file
                HttpPostedFile oHttpPostedFile = HttpContext.Current.Request.Files["file"];
                if (oHttpPostedFile == null)
                    throw new HttpResponseException(HttpStatusCode.BadRequest);
                else
                {
                    strFileName = strFileName + Path.GetExtension(oHttpPostedFile.FileName);
                    UploadFileToBlob(strFileName, oHttpPostedFile);
                }

                //validate and save/process the file as you wish...
                //return positive respnse...
                return await Task.FromResult(Request.CreateResponse(HttpStatusCode.OK, strFileName));
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError("Error in File Upload, " + exMe.Message);
                return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error in File Upload, " + exMe.Message, Configuration.Formatters.JsonFormatter);
            }
        }

        #region Commented FileUpload Methods.
        //[HttpPost]
        //public HttpResponseMessage FileUpload1(UploadFileParams oUploadFileParams)
        //{
        //    try
        //    {
        //        int nLength = 8;
        //        char[] charAvailableCharacters = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
        //        char[] charIdentifier = new char[nLength];
        //        byte[] byteRandomData = new byte[nLength];

        //        using (RNGCryptoServiceProvider oRNGCrypto = new RNGCryptoServiceProvider())
        //        {
        //            oRNGCrypto.GetBytes(byteRandomData);
        //        }

        //        for (int idx = 0; idx < charIdentifier.Length; idx++)
        //        {
        //            int pos = byteRandomData[idx] % charAvailableCharacters.Length;
        //            charIdentifier[idx] = charAvailableCharacters[pos];
        //        }

        //        string strFileName = new string(charIdentifier);
        //        //pick file with name: file                
        //        oUploadFileParams.oHttpFile = HttpContext.Current.Request.Files["file"];
        //        if (oUploadFileParams.oHttpFile == null)
        //            throw new HttpResponseException(HttpStatusCode.BadRequest);
        //        else
        //        {
        //            strFileName = strFileName + Path.GetExtension(oUploadFileParams.oHttpFile.FileName);
        //            UploadFileToBlob(strFileName, oUploadFileParams.oHttpFile);
        //        }

        //        DataTable dtResult = new DataTable();
        //        DataTableSuccess oDataTableWStatus = new DataTableSuccess();
        //        int nArgCnt = 0, nArgIncre = 0;
        //        if (oUploadFileParams.oProcParams != null)
        //            nArgCnt = oUploadFileParams.oProcParams.Count;
        //        if (oUploadFileParams.oEncryptedArgs != null)
        //            nArgCnt = nArgCnt + oUploadFileParams.oEncryptedArgs.Count;

        //        SqlParameter[] arlParams = new SqlParameter[nArgCnt];
        //        if (oUploadFileParams.oProcParams != null)
        //        {
        //            for (int j = 0; j < oUploadFileParams.oProcParams.Count; j++)
        //            {
        //                arlParams[nArgIncre] = new SqlParameter(("@" + oUploadFileParams.oProcParams[j].strKey), oUploadFileParams.oProcParams[j].strArgmt);
        //                nArgIncre = nArgIncre + 1;
        //            }
        //        }

        //        arlParams[nArgIncre] = new SqlParameter(("@Appointment_IssueImg"), strFileName);
        //        nArgIncre = nArgIncre + 1;

        //        if (oUploadFileParams.oEncryptedArgs != null)
        //        {
        //            for (int j = 0; j < oUploadFileParams.oEncryptedArgs.Count; j++)
        //            {
        //                arlParams[nArgIncre] = new SqlParameter(("@" + oUploadFileParams.oEncryptedArgs[j].strKey), oUploadFileParams.oEncryptedArgs[j].strArgmt);
        //                nArgIncre = nArgIncre + 1;
        //            }
        //        }

        //        DataSet dsResult = new DataSet();
        //        dsResult = SQLHelper.ExecuteDataset(oUploadFileParams.strProc, arlParams);

        //        oDataTableWStatus.status = dsResult.Tables[0].Rows[0][0].ToString();
        //        oDataTableWStatus.message = dsResult.Tables[1].Rows[0][0].ToString();
        //        oDataTableWStatus.details = dsResult.Tables[2];

        //        var response = oDataTableWStatus;
        //        return Request.CreateResponse(HttpStatusCode.OK, response, Configuration.Formatters.JsonFormatter);
        //    }
        //    catch (SqlException exMe)
        //    {
        //        ApplicationLog.LogError(exMe);
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
        //    }
        //    catch (Exception exMe)
        //    {
        //        ApplicationLog.LogError("Error in File Upload, " + exMe.Message);
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, exMe.Message, Configuration.Formatters.JsonFormatter);
        //    }
        //}
               
        //[HttpPost]
        //[AcceptVerbs("GET", "POST")]
        //public async Task<HttpResponseMessage> FileUpload2()
        //{
        //    try
        //    {                
        //        int nLength = 8;
        //        char[] AvailableCharacters = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
        //        char[] identifier = new char[nLength];
        //        byte[] randomData = new byte[nLength];

        //        using (RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider())
        //        {
        //            rng.GetBytes(randomData);
        //        }

        //        for (int idx = 0; idx < identifier.Length; idx++)
        //        {
        //            int pos = randomData[idx] % AvailableCharacters.Length;
        //            identifier[idx] = AvailableCharacters[pos];
        //        }

        //        string strFileName = new string(identifier);                                
        //        //pick file with name: file
        //        HttpPostedFile oHttpPostedFile = HttpContext.Current.Request.Files["file"];
        //        if (oHttpPostedFile == null)
        //            throw new HttpResponseException(HttpStatusCode.BadRequest);
        //        else
        //        {
        //            strFileName = strFileName + Path.GetExtension(oHttpPostedFile.FileName);
        //            UploadFileToBlob(strFileName, oHttpPostedFile);
        //        }                
        //        //validate and save/process the file as you wish...
        //        //return positive respnse...
        //        return await Task.FromResult(Request.CreateResponse(HttpStatusCode.OK, strFileName));
        //    }
        //    catch (Exception exMe)
        //    {
        //        ApplicationLog.LogError("Error in File Upload, " + exMe.Message);
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error in File Upload, " + exMe.Message, Configuration.Formatters.JsonFormatter);
        //    }
        //}

        //[HttpPost]
        //public async Task<HttpResponseMessage> FileUpload3()
        //{
        //    try
        //    {
        //        int nLength = 8;
        //        char[] AvailableCharacters = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
        //        char[] identifier = new char[nLength];
        //        byte[] randomData = new byte[nLength];

        //        using (RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider())
        //        {
        //            rng.GetBytes(randomData);
        //        }

        //        for (int idx = 0; idx < identifier.Length; idx++)
        //        {
        //            int pos = randomData[idx] % AvailableCharacters.Length;
        //            identifier[idx] = AvailableCharacters[pos];
        //        }

        //        string strFileName = new string(identifier);

        //        //pick file with name: file
        //        HttpPostedFile oHttpPostedFile = HttpContext.Current.Request.Files["file"];
        //        if (oHttpPostedFile == null)
        //            throw new HttpResponseException(HttpStatusCode.BadRequest);
        //        else
        //        {
        //            strFileName = strFileName + Path.GetExtension(oHttpPostedFile.FileName);
        //            UploadFileToBlob(strFileName, oHttpPostedFile);
        //        }

        //        //validate and save/process the file as you wish...
        //        //return positive respnse...
        //        return await Task.FromResult(Request.CreateResponse(HttpStatusCode.OK, strFileName));
        //    }
        //    catch (Exception exMe)
        //    {
        //        ApplicationLog.LogError("Error in File Upload, " + exMe.Message);
        //        return Request.CreateResponse(HttpStatusCode.InternalServerError, "Error in File Upload, " + exMe.Message, Configuration.Formatters.JsonFormatter);
        //    }
        //}
        #endregion

        private void UploadFileToBlob(string strFileName, HttpPostedFile oHttpPostedFile)
        {
            try
            {
                // assuming HttpPostedFile is in a variable called postedFile  
                var varContentType = oHttpPostedFile.ContentType;
                var varStreamContents = oHttpPostedFile.InputStream;

                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConfigurationManager.ConnectionStrings["StorageConnection"].ToString());

                // Create the blob client.
                CloudBlobClient oCloudBlobClient = storageAccount.CreateCloudBlobClient();

                // Retrieve a reference to a container.
                CloudBlobContainer oCloudBlobContainer = oCloudBlobClient.GetContainerReference("fixziupload");

                // Retrieve reference to a blob named "myblob".
                CloudBlockBlob oCloudBlockBlob = oCloudBlobContainer.GetBlockBlobReference(strFileName);//"4.jpg"
                oCloudBlockBlob.Properties.ContentType = varContentType;//"image/jpeg"

                // Delete the blob.
                if (oCloudBlockBlob.Exists())
                    oCloudBlockBlob.Delete();

                oCloudBlockBlob.UploadFromStream(varStreamContents);

                //Blob URL
                //string strURL = "https://zyportalvhdsmlxw2vrvqdf0.blob.core.windows.net/fixziupload/" + strFileName;
                

                //CDN URL
                //string strURL = "http://az839713.vo.msecnd.net/fixziupload/" + strFileName;
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError("Error in File Upload, " + exMe.Message);
            }
        }
    }
}
