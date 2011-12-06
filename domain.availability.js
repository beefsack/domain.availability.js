/**
 * 
 */

function DomainAvailability() {}

DomainAvailability.check = function(domain, options) {
  if (options === undefined) options = {};
  if (options.available === undefined) options.available = function() {
    alert("Domain " + domain + " is available.");
  };
  if (options.unavailable === undefined) options.unavailable = function() {
    alert("Domain " + domain + " is unavailable.");
  };
  jQuery.ajax({
    url: "http://whois-server.heroku.com/" + domain,
    success: function(data) {
      if (data.available) {
	options.available(data);
      } else {
	options.unavailable(data);
      }
    },
    error: options.error
  });
};
