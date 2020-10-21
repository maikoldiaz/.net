using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using myCV.Models;
using myCV.Context;
using System.Linq;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace myCV.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CVController : ControllerBase
    {
        public CVController(AppDbContext context)
        {
            _context = context;
        }
        private readonly AppDbContext _context;

        [HttpGet]
        public IEnumerable<CurriculumVitae> Get()
        {
            return _context.CurriculumVitae.OrderBy(x => x.IdCV);
        }

        [HttpGet("{id}")]
        public CurriculumVitae GetCurriculum([FromRoute] int id)
        {
            return _context.CurriculumVitae.FirstOrDefault(x => x.IdCV == id);
        }

        [HttpPost]
        public ActionResult<CurriculumVitae> Post([FromBody] CurriculumVitae curriculum)
        {
            try
            {
                var result = _context.CurriculumVitae.Add(curriculum);
                _context.SaveChanges();
                return new ObjectResult(new { id = result.Entity.IdCV }) { StatusCode = 201 };
            }
            catch (Exception ex)
            {
                return new ObjectResult(new { error = ex.Message }) { StatusCode = 409 };
            }
        }

        [HttpPut]
        public ActionResult<CurriculumVitae> Put([FromBody] CurriculumVitae curriculum)
        {
            try
            {
                var result = _context.CurriculumVitae.Update(curriculum);
                _context.SaveChanges();
                return new ObjectResult(new { id = result.Entity.IdCV }) { StatusCode = 200 };
            }
            catch (Exception ex)
            {
                return new ObjectResult(new { error = ex.Message }) { StatusCode = 500 };
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Delete([FromRoute] int id)
        {
            var result = _context.CurriculumVitae.Remove(new CurriculumVitae { IdCV = id });
            _context.SaveChanges();
            return new ObjectResult(new { id = id }) { StatusCode = 200 };
        }
    }
}