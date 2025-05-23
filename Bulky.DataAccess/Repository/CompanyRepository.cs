﻿using BulkyBook.DataAccess.Data;
using BulkyBook.DataAccess.Repository.IRepository;
using BulkyBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BulkyBook.DataAccess.Repository
{
	public class CompanyRepositoty : Repository<Company>, ICompanyRepository
    {
		private ApplicationDbContext _db;
		public CompanyRepositoty(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
		

		public void Update(Company objCompany)
		{
			_db.Companies.Update(objCompany);
		}
	}
}
