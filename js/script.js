var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){
	$('#nav-icon').click(function(){
		if ($(this).attr('data-toggle') == "0") {
			$('#nav-list').show('slide', {'direction': 'left'}, 300);
			$(this).attr('data-toggle', "1");
		} else {
			$('#nav-list').hide('slide', {'direction': 'left'}, 300);
			$(this).attr('data-toggle', "0");
		}
	});

	$('#viewport').click(function(){
		$('#nav-list').hide('slide', {'direction': 'left'}, 300);
		$('#nav-icon').attr('data-toggle', "0");
	});

	$('.nav-item').click(function(){
		if ($(this).attr('id') == "nav-item-about") {
      $('#nav-logo').text('About Me');
			$('html, body').animate({'scrollTop': '540px'});
		} else if ($(this).attr('id') == "nav-item-resume") {
      $('#nav-logo').text('Resume');
			$('html, body').animate({'scrollTop': '1352px'});
		} else if ($(this).attr('id') == "nav-item-projects") {
      $('#nav-logo').text('Projects');
			$('html, body').animate({'scrollTop': '3250px'});
		} else if ($(this).attr('id') == "nav-item-mentors") {
      $('#nav-logo').text('References');
			$('html, body').animate({'scrollTop': '4190px'});
		} else if ($(this).attr('id') == "nav-item-social") {
      $('#nav-logo').text('Follow Me');
			$('html, body').animate({'scrollTop': '4880px'});
		}
		$('#nav-list').hide('slide', {'direction': 'left'}, 300);
		$('#nav-icon').attr('data-toggle', "0");
	});

	$('#nav-logo').click(function(){
		$('html, body').animate({'scrollTop': '0px'});
		$('#nav-list').hide('slide', {'direction': 'left'}, 300);
		$('#nav-icon').attr('data-toggle', "0");
    $('#nav-logo').text('Rahmal Conda');
	});

  $('.team-item-overlay').mouseover(function(e){
    $(this).css('background','#444');
    $(this).css('opacity','0.9');
  }).mouseout(function(e){
    $(this).css('background','rgba(155, 89, 182, 0.5)');
    $(this).css('opacity','1.0');
  })

  $('.tooltip').tooltipster({
    maxWidth: 300,
    contentAsHTML: true
  });
});


}
/*
     FILE ARCHIVED ON 02:20:37 Oct 28, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:09:20 Sep 08, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 320.086
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.076
  cdx.remote: 0.066
  esindex: 0.011
  LoadShardBlock: 281.356 (3)
  PetaboxLoader3.datanode: 171.841 (5)
  load_resource: 242.526 (2)
  PetaboxLoader3.resolve: 134.396 (2)
*/
