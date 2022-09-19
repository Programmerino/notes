var tealium_env,
    utag_data = {};

(function() {
  let env = window.location.hostname.match(/qa|dev|uat|localhost/g) || ["prod"];

  switch (env[0]) {
    case 'localhost':
    case 'dev':
      tealium_env='dev';
      break;
    case 'qa':
    case 'uat':
      tealium_env='qa';
      break;
    default:
      tealium_env='prod';
  }
}());

(function(a,b,c,d){
    a='//tags.tiqcdn.com/utag/aba/americanbar/'+tealium_env+'/utag.js';
    b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
    a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
    })();
