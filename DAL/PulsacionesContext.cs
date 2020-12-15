using System;
using ENTITY;
using Microsoft.EntityFrameworkCore;


namespace DAL
{
    public class PulsacionesContext : DbContext
    {
      public PulsacionesContext(DbContextOptions options) : base (options){
      
      }
      public DbSet <Persona> Persona{get;set;}
      

    }
}
