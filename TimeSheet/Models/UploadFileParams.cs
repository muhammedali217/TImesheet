using System.Collections.Generic;
using System.Web;

namespace TimeSheet
{
    public class UploadFileParams
    {
        public string strProc { get; set; }
        public List<ProcParams> oProcParams { get; set; }
        public List<EncryptedArgs> oEncryptedArgs { get; set; }
        public HttpPostedFile oHttpFile { get; set; }
    }
}