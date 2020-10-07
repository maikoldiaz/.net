using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using myCV.Models;

namespace myCV.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CVController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<CurriculumVitae> Get() => GetCurriculumVitaes();
        public IEnumerable<CurriculumVitae> GetCurriculumVitaes()
        {
            return new List<CurriculumVitae>(){
            new CurriculumVitae()
            {
                IdCV = 1,
                fullName = "Maikol Diaz Hoya",
                PhoneNumber = "3103129835",
                Email = "diazhoyamaikol@gmail.com",
                Icon = "https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg",
                Description = "i'm a young software developer"
            },
            new CurriculumVitae()
            {
                IdCV = 2,
                fullName = "David Botero",
                PhoneNumber = "123456789",
                Email = "davidbotero@gmail.com",
                Icon = "https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg",
                Description = "i'm a young student"
            }
            };
        }
    }
}