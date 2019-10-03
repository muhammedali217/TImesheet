using System;
using System.Collections.Generic;

namespace TimeSheet
{
    public class EncryptedArgs
    {
        CTripleDES oCTripleDES = new CTripleDES();

        public string strKey { get; set; }

        private string strToEncrypt;
        public string strArgmt {
            get
            {
                return this.strToEncrypt;
            }
            set
            {
                this.strToEncrypt = oCTripleDES.GetEncryptedData(value);
            }
        }
    }
}