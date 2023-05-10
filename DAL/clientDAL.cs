using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL 
{
    public class clientDAL
    {

        //קבלת כל הלקוחות
        public static List<client> getAll()
        {
            using (koronaEntities db = new koronaEntities())
            {
                try
                {
                    return db.clients.ToList();

                }
                catch (Exception e)
                {
                    return null;
                }
            }
        }



        //הוספת לקוח
        public static bool AddNew(client e)
        {
            try
            {
                using (koronaEntities db = new koronaEntities())
                {
                    db.clients.Add(e);
                    db.SaveChanges();
                    return true;
                }
            }
            catch
            {
                return false;
            }

        }

    }
}
