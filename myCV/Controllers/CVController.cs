using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using myCV.Models;
using myCV.Context;
using System.Linq;
using System.Threading.Tasks;

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
        public IEnumerable<CurriculumVitae> Get() {
            return _context.CurriculumVitae.OrderBy(x => x.IdCV);
        }

        [HttpGet("{id}")]
        public CurriculumVitae GetCurriculum([FromRoute]int id){
            return _context.CurriculumVitae.FirstOrDefault(x => x.IdCV == id);
        }

        [HttpPost]
        public ActionResult<CurriculumVitae> Post([FromBody]CurriculumVitae curriculum)
        {
            var result = _context.CurriculumVitae.Add(curriculum);
            _context.SaveChanges();
            return new ObjectResult(new { id = result.Entity.IdCV}) {StatusCode = 200}; //CreatedAtAction(nameof(CurriculumVitae), new { id = result.Entity.IdCV});
        }
    }
}