﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Migrations.DbInitializer
{
    public interface IDbInitializer
    {
        void Initialize();
    }
}
