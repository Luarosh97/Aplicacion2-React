using System.Security.Permissions;
using DAL;
using ENTITY;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    public class PersonaService
    {
        private readonly PulsacionesContext _context;

        public PersonaService( PulsacionesContext context )
        {
            _context=context;
            
        }
        public GuardarPersonaResponse Guardar(Persona persona)
        {
            try
            {
                
                var personabuscada = _context.Persona.Find(persona.Identificacion);
                if(personabuscada != null){
                    return new GuardarPersonaResponse("Error La Persona Ya se encuentra registrada");
                }
                 persona.CalcularPulsaciones();

                _context.Persona.Add(persona);
                _context.SaveChanges();
                
                
                return new GuardarPersonaResponse(persona);
            }
           
            catch (Exception e)
            {
                return new GuardarPersonaResponse($"Error de la Aplicacion: {e.Message}");
            }
            
        }

        public List<Persona> ConsultarTodos()
        {
            
            List<Persona> personas = _context.Persona.ToList();;
            return personas;
        }

        public string Eliminar(string identificacion)
        {
            try
            {
                
                var persona = _context.Persona.Find(identificacion);
                if (persona!= null)
                {
                    _context.Persona.Remove(persona);
                    _context.SaveChanges();
                    return ($"El registro {persona.Nombre} se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
            

        }
        
        public Persona BuscarxIdentificacion(string identificacion)
        {
            
            Persona persona = _context.Persona.Find(identificacion);
            return persona;
        }

        public string Modificar(Persona personanueva)
        {
            try
            {
                
                var personaantigua= _context.Persona.Find(personanueva.Identificacion);
                if (personaantigua != null)
                {
                    personaantigua.Identificacion = personanueva.Identificacion;
                    personaantigua.Nombre = personanueva.Nombre;
                    personaantigua.Sexo = personanueva.Sexo;
                    personaantigua.Edad = personanueva.Edad;
                    personaantigua.CalcularPulsaciones();
                    _context.Persona.Update(personaantigua);
                    _context.SaveChanges();

                    return ($"El registro {personanueva.Nombre} se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {personanueva.Identificacion} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
            
        }

        public int Totalizar()
        {
            return _context.Persona.Count();
        }
        public int TotalizarMujeres()
        {
            return _context.Persona.Count(p=> p.Sexo=="F");;
        }
        public int TotalizarHombres()
        {
            return _context.Persona.Count(p=> p.Sexo=="M");;
        }
    }

    public class GuardarPersonaResponse 
    {
        public GuardarPersonaResponse(Persona persona)
        {
            Error = false;
            Persona = persona;
        }
        public GuardarPersonaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Persona Persona { get; set; }
    }
  }    

