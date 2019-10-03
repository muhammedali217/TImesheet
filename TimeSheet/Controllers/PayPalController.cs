using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web;
using System.Web.Http;
using TimeSheet.Common;
using TimeSheet.Models;
using PayPal.PayPalAPIInterfaceService;
using PayPal.PayPalAPIInterfaceService.Model;


namespace TimeSheet.Controllers
{
    public class PayPalController : ApiController
    {
        [AcceptVerbs("GET", "POST")]
        public string CreateDynamicPayPalButton(Paypal oPaypal)
        {
            try
            {
                // Create request object
                BMCreateButtonRequestType oBMCreateButtonRequestType = new BMCreateButtonRequestType();
                ButtonTypeType enumButtonTypeType = (ButtonTypeType)Enum.Parse(typeof(ButtonTypeType), "BUYNOW");
                oBMCreateButtonRequestType.ButtonType = enumButtonTypeType;
                oBMCreateButtonRequestType.ButtonCode = (ButtonCodeType)Enum.Parse(typeof(ButtonCodeType), "ENCRYPTED");

                string strBaseUrl = HttpContext.Current.Request.Url.Scheme + "://" + HttpContext.Current.Request.Url.Authority + HttpContext.Current.Request.ApplicationPath.TrimEnd('/') + "/";
                bool bLocalHost = false;
                bLocalHost = strBaseUrl.Contains("localhost");
                List<string> listBtnVariables = new List<string>();

                listBtnVariables.Add("item_name=" + "FixZ Order");
                listBtnVariables.Add("amount=" + oPaypal.PaypalTransaction_PaymentGross.ToString());
                listBtnVariables.Add("return=" + strBaseUrl + "signup.html");
                //listBtnVariables.Add("cancel_return=" + strBaseUrl + "failure.aspx");                
                listBtnVariables.Add("custom=" + oPaypal.PaypalTransaction_Custom.ToString());
                listBtnVariables.Add("quantity=1");                
                
                if (bLocalHost == false)
                    listBtnVariables.Add("notify_url=" + strBaseUrl + "api/PayPal/CallBackURL4Paypal");
                oBMCreateButtonRequestType.ButtonVar = listBtnVariables;

                // Invoke the API
                BMCreateButtonReq wrapper = new BMCreateButtonReq();
                wrapper.BMCreateButtonRequest = oBMCreateButtonRequestType;

                Dictionary<string, string> configurationMap = ConfigurationPaypal.GetAcctAndConfig();

                // Creating service wrapper object to make an API call by loading configuration map. 
                PayPalAPIInterfaceServiceService service = new PayPalAPIInterfaceServiceService(configurationMap);
                BMCreateButtonResponseType oBMCrBtnRespType = service.BMCreateButton(wrapper);

                // Check for API return status
                if (oBMCrBtnRespType.Ack.Equals(AckCodeType.FAILURE) || (oBMCrBtnRespType.Errors != null && oBMCrBtnRespType.Errors.Count > 0))
                    return "false";
                else
                {
                    if (oBMCrBtnRespType.Website != null)
                        return oBMCrBtnRespType.Website;
                    else
                        return "false";
                }
            }
            catch (SqlException exMe)
            {
                ApplicationLog.LogError(exMe);
                return exMe.Message;
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe);
                return exMe.Message;
            }
        }

        //[HttpPost]
        [AcceptVerbs("POST")]
        public string CallBackURL4Paypal()
        {
            try
            {
                ApplicationLog.LogError(Convert.ToString(HttpContext.Current.Request.Form["custom"]), "Custom, Callback");
                PaypalRepository oPaypalRepository = new PaypalRepository();
                Paypal oPaypalTransactionInfo = new Paypal();

                oPaypalTransactionInfo.PaypalTransaction_ProtectionEligibility = Convert.ToString(HttpContext.Current.Request.Form["protection_eligibility"]);
                oPaypalTransactionInfo.PaypalTransaction_McGross = String.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Request.Form["mc_grosss"])) ? 0 : Convert.ToDecimal(HttpContext.Current.Request.Form["mc_grosss"]);
                oPaypalTransactionInfo.PaypalTransaction_Charset = Convert.ToString(HttpContext.Current.Request.Form["charset"]);
                oPaypalTransactionInfo.PaypalTransaction_NotifyVersion = Convert.ToString(HttpContext.Current.Request.Form["notify_version"]);
                oPaypalTransactionInfo.PaypalTransaction_PayerStatus = Convert.ToString(HttpContext.Current.Request.Form["payer_status"]);
                oPaypalTransactionInfo.PaypalTransaction_AddressStatus = Convert.ToString(HttpContext.Current.Request.Form["address_status"]);
                oPaypalTransactionInfo.PaypalTransaction_PayerId = Convert.ToString(HttpContext.Current.Request.Form["payer_id"]);
                oPaypalTransactionInfo.PaypalTransaction_FirstName = Convert.ToString(HttpContext.Current.Request.Form["first_name"]);
                oPaypalTransactionInfo.PaypalTransaction_Pincode = String.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Request.Form["address_zip"])) ? 0 : Convert.ToInt32(HttpContext.Current.Request.Form[" address_zip"]);
                oPaypalTransactionInfo.PaypalTransaction_State = Convert.ToString(HttpContext.Current.Request.Form["address_state"]);
                oPaypalTransactionInfo.PaypalTransaction_Country = Convert.ToString(HttpContext.Current.Request.Form["address_country"]);
                oPaypalTransactionInfo.PaypalTransaction_PayerEmail = Convert.ToString(HttpContext.Current.Request.Form["payer_email"]);
                oPaypalTransactionInfo.PaypalTransaction_PaymentType = Convert.ToString(HttpContext.Current.Request.Form["payment_type"]);
                oPaypalTransactionInfo.PaypalTransaction_PaymentDate = Convert.ToString(HttpContext.Current.Request.Form["payment_date"]);
                oPaypalTransactionInfo.PaypalTransaction_PayerStatus = Convert.ToString(HttpContext.Current.Request.Form["payment_status"]);
                oPaypalTransactionInfo.PaypalTransaction_Mcfees = Convert.ToString(HttpContext.Current.Request.Form["mc_fee"]);
                oPaypalTransactionInfo.PaypalTransaction_Quantity = String.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Request.Form["quantity"])) ? 0 : Convert.ToInt32(HttpContext.Current.Request.Form["quantity"]);
                oPaypalTransactionInfo.PaypalTransaction_VerifySign = Convert.ToString(HttpContext.Current.Request.Form["verify_sign"]);
                oPaypalTransactionInfo.PaypalTransaction_Transactionid = Convert.ToString(HttpContext.Current.Request.Form["txn_id"]);
                oPaypalTransactionInfo.PaypalTransactionl_ReceiverId = Convert.ToString(HttpContext.Current.Request.Form["receiver_id"]);
                oPaypalTransactionInfo.PaypalTransaction_TransactionType = Convert.ToString(HttpContext.Current.Request.Form["txn_type"]);
                oPaypalTransactionInfo.PaypalTransaction_ItemName = Convert.ToString(HttpContext.Current.Request.Form["item_name"]);
                oPaypalTransactionInfo.PaypalTransaction_ItemNumber = Convert.ToString(HttpContext.Current.Request.Form["item_number"]);
                oPaypalTransactionInfo.PaypalTransaction_Currency = Convert.ToString(HttpContext.Current.Request.Form["mc_currency"]);
                oPaypalTransactionInfo.PaypalTransaction_ResidenceCountry = Convert.ToString(HttpContext.Current.Request.Form["residence_country"]);
                oPaypalTransactionInfo.PaypalTransaction_TestIPN = Convert.ToString(HttpContext.Current.Request.Form["test_ipn"]);
                oPaypalTransactionInfo.PaypalTransaction_HandlingAmount = String.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Request.Form["handling_amount"])) ? 0 : Convert.ToDecimal(HttpContext.Current.Request.Form["handling_amount"]);
                oPaypalTransactionInfo.PaypalTransaction_TransactionSubject = Convert.ToString(HttpContext.Current.Request.Form["transaction_subject"]);
                oPaypalTransactionInfo.PaypalTransaction_PaymentGross = String.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Request.Form["payment_gross"])) ? 0 : Convert.ToDecimal(HttpContext.Current.Request.Form["payment_gross"]);
                oPaypalTransactionInfo.PaypalTransaction_Shipping = String.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Request.Form["shipping"])) ? 0 : Convert.ToDecimal(HttpContext.Current.Request.Form["shipping"]);
                oPaypalTransactionInfo.PaypalTransaction_Custom = String.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Request.Form["custom"])) ? 0 : Convert.ToInt32(HttpContext.Current.Request.Form[" custom"]);
                oPaypalTransactionInfo.PaypalTransaction_Recurring = Convert.ToString(HttpContext.Current.Request.Form["recurring"]);
                oPaypalTransactionInfo.PaypalTransaction_Reattempt = Convert.ToString(HttpContext.Current.Request.Form["reattempt"]);
                oPaypalTransactionInfo.PaypalTransaction_RetryAt = Convert.ToString(HttpContext.Current.Request.Form["retry_at"]);
                oPaypalTransactionInfo.PaypalTransaction_Times = Convert.ToString(HttpContext.Current.Request.Form["recur_times"]);
                oPaypalTransactionInfo.PaypalTransaction_Username = Convert.ToString(HttpContext.Current.Request.Form["username"]);
                oPaypalTransactionInfo.PaypalTransaction_Password = Convert.ToString(HttpContext.Current.Request.Form["password"]);
                oPaypalTransactionInfo.PaypalTransaction_SubscrId = Convert.ToString(HttpContext.Current.Request.Form["subscr_id"]);
                return oPaypalRepository.AddPayPalTransactiondetails(oPaypalTransactionInfo);
            }
            catch (Exception exMe)
            {
                ApplicationLog.LogError(exMe);                
                return "fail";
            }
        }
    }
}
