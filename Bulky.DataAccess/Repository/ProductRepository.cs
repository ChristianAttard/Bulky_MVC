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
	public class ProductRepository : Repository<Product>, IProductRepository
	{
		private ApplicationDbContext _db;
		public ProductRepository(ApplicationDbContext db) : base(db)
		{
			_db = db;
		}
		

		public void Update(Product objProduct)
		{
			var objFromDb = _db.Products.FirstOrDefault(u=>u.Id == objProduct.Id);
            if (objFromDb != null) 
            {
                objFromDb.Title = objProduct.Title;
				objFromDb.ISBN = objProduct.ISBN;
				objFromDb.Price = objProduct.Price;
				objFromDb.Price50 = objProduct.Price50;
				objFromDb.ListPrice = objProduct.ListPrice;
				objFromDb.Price100 = objProduct.Price100;
				objFromDb.Description = objProduct.Description;
				objFromDb.CategoryId = objProduct.CategoryId;
				objFromDb.Author = objProduct.Author;
				if (objProduct.ImageUrl != null) 
				{
					objProduct.ImageUrl = objProduct.ImageUrl;
				}

			}
        }
	}
}
