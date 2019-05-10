using System.Web.Http;
using ElectronicDiary;
using ElectronicDiary.App_Start;
using Microsoft.Owin;
using Unity;
using Owin;
using Diary.DAL.Contexts;
using Diary.DAL.Models;
using Unity.AspNet.WebApi;

[assembly: OwinStartup(typeof(ElectronicDiary.Startup))]

namespace ElectronicDiary
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);

            //using (ElectronicDiaryContext context = new ElectronicDiaryContext())
            //{
            //    Mark mark = new Mark();
            //    context.Marks.Add(mark);
            //    context.SaveChanges();
            //}

            config.DependencyResolver = new UnityDependencyResolver(UnityConfig.Container);
            app.UseWebApi(config);
        }
    }
}
