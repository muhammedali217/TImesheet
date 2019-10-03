using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;


namespace TimeSheet
{
    public class CTripleDES
    {

        #region Private Variables & Constructors
        //Define the triple des provider
        private TripleDESCryptoServiceProvider oTripleDESCryptoServiceProvider = new TripleDESCryptoServiceProvider();

        //Define the string handler
        private UTF8Encoding m_utf8 = new UTF8Encoding();

        //Define the local property arrays
        private byte[] m_key;
        private byte[] m_iv;

        //Define the key for encryption
        private const String IDS_KEY_VALUE = "?<>!$%#P@s5pR@se!*^=&|'~";
        private const String IDS_INIT_VECTOR = "@1B2c3D4e5F6g7H8";

        public CTripleDES()
        {
        }

        ~CTripleDES()
        {
        }
        #endregion

        private byte[] Transform(byte[] bytInput, ICryptoTransform CryptoTransform)
        {
            try
            {
                //Create the necessary streams
                MemoryStream memStream = new MemoryStream();
                CryptoStream cryptStream = new CryptoStream(memStream, CryptoTransform, CryptoStreamMode.Write);

                //Transform the bytes as requested
                cryptStream.Write(bytInput, 0, bytInput.Length);
                cryptStream.FlushFinalBlock();

                //Read the memory stream and convert it back into byte array
                memStream.Position = 0;

                byte[] bytResult = new byte[(System.Int32)memStream.Length - 1 + 1];
                memStream.Read(bytResult, 0, (System.Int32)bytResult.Length);

                //Close and release the streams
                memStream.Close();
                cryptStream.Close();

                //Hand back the encrypted buffer
                return bytResult;
            }
            catch 
            {
                return null;
            }
        }

        public string GetEncryptedData(String strData)
        {
            try
            {
                String strEncrypted = String.Empty;
                m_key = Encoding.ASCII.GetBytes(IDS_KEY_VALUE);
                m_iv = Encoding.ASCII.GetBytes(IDS_INIT_VECTOR);
                strEncrypted = Encrypt(strData);
                return strEncrypted;
            }
            catch 
            {
                return null;
            }
        }

        public string GetDecryptedData(String strData)
        {
            try
            {
                String strDecrypted = String.Empty;
                m_key = Encoding.ASCII.GetBytes(IDS_KEY_VALUE);
                m_iv = Encoding.ASCII.GetBytes(IDS_INIT_VECTOR);
                strDecrypted = Decrypt(strData);
                return strDecrypted;
            }
            catch 
            {
                return null;
            }
        }

        private byte[] Encrypt(byte[] bytInput)
        {
            try
            {
                return Transform(bytInput, oTripleDESCryptoServiceProvider.CreateEncryptor(m_key, m_iv));
            }
            catch 
            {
                return null;
            }
        }

        private byte[] Decrypt(byte[] bytInput)
        {
            try
            {
                return Transform(bytInput, oTripleDESCryptoServiceProvider.CreateDecryptor(m_key, m_iv));
            }
            catch 
            {
                return null;
            }
        }

        private string Encrypt(string strText)
        {
            try
            {
                byte[] bytInput = m_utf8.GetBytes(strText);
                byte[] bytOutput = Transform(bytInput, oTripleDESCryptoServiceProvider.CreateEncryptor(m_key, m_iv));
                return Convert.ToBase64String(bytOutput);
            }
            catch 
            {
                return null;
            }
        }

        private string Decrypt(string strText)
        {
            try
            {
                byte[] bytInput = Convert.FromBase64String(strText);
                byte[] bytOutput = Transform(bytInput, oTripleDESCryptoServiceProvider.CreateDecryptor(m_key, m_iv));
                return m_utf8.GetString(bytOutput);
            }
            catch 
            {
                return null;
            }
        }
    }
}