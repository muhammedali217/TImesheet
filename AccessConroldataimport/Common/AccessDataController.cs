using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccessConroldataimport.Common
{
    public class AccessDataController
    {

        public string Importalldata()
        {
            try
            {
                AccessDataRepository oAccessDataRepository = new AccessDataRepository();

                string dtimportdatastring = oAccessDataRepository.Importalldata();
                
                //MailHelper.TimesheetRemainderEmail("unni@techvantagesystems.com");
                return "Success";
            }
            catch (Exception ex)
            {
                return "Error";
            }
        }


    }
}
