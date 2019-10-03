using System.Collections.Generic;

namespace TimeSheet
{
    public class ServiceParams
    {
        public string strProc { get; set; }
        public List<ProcParams> oProcParams { get; set; }
        public List<EncryptedArgs> oEncryptedArgs { get; set; }
    }
}