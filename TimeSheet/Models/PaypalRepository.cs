using System;
using System.Data.SqlClient;

namespace TimeSheet.Models
{
    public class PaypalRepository
    {
        SqlParameter[] arlParams = null;
        public string AddPayPalTransactiondetails(Paypal oPaypalTransactionInfo)
        {
            try
            {
                arlParams = new SqlParameter[41];
                arlParams[0] = new SqlParameter("@PaypalTransaction_ProtectionEligibility", oPaypalTransactionInfo.PaypalTransaction_ProtectionEligibility);
                arlParams[1] = new SqlParameter("@PaypalTransaction_McGross", oPaypalTransactionInfo.PaypalTransaction_McGross);
                arlParams[2] = new SqlParameter("@PaypalTransaction_Charset", oPaypalTransactionInfo.PaypalTransaction_Charset);
                arlParams[3] = new SqlParameter("@PaypalTransaction_NotifyVersion", oPaypalTransactionInfo.PaypalTransaction_NotifyVersion);
                arlParams[4] = new SqlParameter("@PaypalTransaction_PayerStatus", oPaypalTransactionInfo.PaypalTransaction_PayerStatus);
                arlParams[5] = new SqlParameter("@PaypalTransaction_AddressStatus", oPaypalTransactionInfo.PaypalTransaction_AddressStatus);
                arlParams[6] = new SqlParameter("@PaypalTransaction_PayerId", oPaypalTransactionInfo.PaypalTransaction_PayerId);
                arlParams[7] = new SqlParameter("@PaypalTransaction_FirstName", oPaypalTransactionInfo.PaypalTransaction_FirstName);
                arlParams[8] = new SqlParameter("@PaypalTransaction_LastName", oPaypalTransactionInfo.PaypalTransaction_LastName);
                arlParams[9] = new SqlParameter("@PaypalTransaction_AddressStreet", oPaypalTransactionInfo.PaypalTransaction_AddressStreet);
                arlParams[10] = new SqlParameter("@PaypalTransaction_City", oPaypalTransactionInfo.PaypalTransaction_City);
                arlParams[11] = new SqlParameter("@PaypalTransaction_Pincode", oPaypalTransactionInfo.PaypalTransaction_Pincode);
                arlParams[12] = new SqlParameter("@PaypalTransaction_State", oPaypalTransactionInfo.PaypalTransaction_State);
                arlParams[13] = new SqlParameter("@PaypalTransaction_Country", oPaypalTransactionInfo.PaypalTransaction_Country);
                arlParams[14] = new SqlParameter("@PaypalTransaction_PayerEmail", oPaypalTransactionInfo.PaypalTransaction_PayerEmail);
                arlParams[15] = new SqlParameter("@PaypalTransaction_PaymentType", oPaypalTransactionInfo.PaypalTransaction_PaymentType);
                arlParams[16] = new SqlParameter("@PaypalTransaction_PaymentDate", oPaypalTransactionInfo.PaypalTransaction_PaymentDate);
                arlParams[17] = new SqlParameter("@PaypalTransaction_PaymentStatus", oPaypalTransactionInfo.PaypalTransaction_PayerStatus);
                arlParams[18] = new SqlParameter("@PaypalTransaction_Mcfees", oPaypalTransactionInfo.PaypalTransaction_Mcfees);
                arlParams[19] = new SqlParameter("@PaypalTransaction_Quantity", oPaypalTransactionInfo.PaypalTransaction_Quantity);
                arlParams[20] = new SqlParameter("@PaypalTransaction_VerifySign", oPaypalTransactionInfo.PaypalTransaction_VerifySign);
                arlParams[21] = new SqlParameter("@PaypalTransaction_Transactionid", oPaypalTransactionInfo.PaypalTransaction_Transactionid);
                arlParams[22] = new SqlParameter("@PaypalTransactionl_ReceiverId", oPaypalTransactionInfo.PaypalTransactionl_ReceiverId);
                arlParams[23] = new SqlParameter("@PaypalTransaction_TransactionType", oPaypalTransactionInfo.PaypalTransaction_TransactionType);
                arlParams[24] = new SqlParameter("@PaypalTransaction_ItemName", oPaypalTransactionInfo.PaypalTransaction_ItemName);
                arlParams[25] = new SqlParameter("@PaypalTransaction_ItemNumber", oPaypalTransactionInfo.PaypalTransaction_ItemNumber);
                arlParams[26] = new SqlParameter("@PaypalTransaction_Currency", oPaypalTransactionInfo.PaypalTransaction_Currency);
                arlParams[27] = new SqlParameter("@PaypalTransaction_ResidenceCountry", oPaypalTransactionInfo.PaypalTransaction_ResidenceCountry);
                arlParams[28] = new SqlParameter("@PaypalTransaction_TestIPN", oPaypalTransactionInfo.PaypalTransaction_TestIPN);
                arlParams[29] = new SqlParameter("@PaypalTransaction_HandlingAmount", oPaypalTransactionInfo.PaypalTransaction_HandlingAmount);
                arlParams[30] = new SqlParameter("@PaypalTransaction_TransactionSubject", oPaypalTransactionInfo.PaypalTransaction_TransactionSubject);
                ApplicationLog.LogError(oPaypalTransactionInfo.PaypalTransaction_TransactionSubject, "TransactionSubject, Reporsitory");
                arlParams[31] = new SqlParameter("@PaypalTransaction_PaymentGross", oPaypalTransactionInfo.PaypalTransaction_PaymentGross);
                arlParams[32] = new SqlParameter("@PaypalTransaction_Shipping", oPaypalTransactionInfo.PaypalTransaction_Shipping);
                arlParams[33] = new SqlParameter("@PaypalTransaction_Custom", oPaypalTransactionInfo.PaypalTransaction_Custom);
                ApplicationLog.LogError(oPaypalTransactionInfo.PaypalTransaction_Custom.ToString(), "Custom, Reporsitory");
                arlParams[34] = new SqlParameter("@PaypalTransaction_Recurring", oPaypalTransactionInfo.PaypalTransaction_Recurring);
                arlParams[35] = new SqlParameter("@PaypalTransaction_Reattempt", oPaypalTransactionInfo.PaypalTransaction_Reattempt);
                arlParams[36] = new SqlParameter("@PaypalTransaction_RetryAt", oPaypalTransactionInfo.PaypalTransaction_RetryAt);
                arlParams[37] = new SqlParameter("@PaypalTransaction_Times", oPaypalTransactionInfo.PaypalTransaction_Times);
                arlParams[38] = new SqlParameter("@PaypalTransaction_Username", oPaypalTransactionInfo.PaypalTransaction_Username);
                arlParams[39] = new SqlParameter("@PaypalTransaction_Password", oPaypalTransactionInfo.PaypalTransaction_Password);
                arlParams[40] = new SqlParameter("@PaypalTransaction_SubscrId", oPaypalTransactionInfo.PaypalTransaction_SubscrId);
                SQLHelper.ExecuteNonQuery("PaypalTransaction_AddDetails", arlParams);
                return "Success";
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe.Message);
                return exMe.Message;
            }
        }
    }
}