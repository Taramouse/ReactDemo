using System.Collections.Generic;
using ReactDemo.Models;
using Microsoft.AspNet.Mvc;

namespace ReactDemo.Controllers
{
    public class HomeController : Controller
    {
        private static readonly IList<CommentModel> _comments;

        static HomeController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Author = "Nicky Keyse",
                    Text = "Hello ReactJS.NET World!"
                },
                new CommentModel
                {
                    Author = "Mike Hunt",
                    Text = "This is one comment"
                },
                new CommentModel
                {
                    Author = "Hugh Jass",
                    Text = "This is *another* comment"
                },
            };
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Comments()
        {
            return Json(_comments);
        }
    }
}
