var InfoAlly;!function(){"use strict";InfoAlly={ally_id:null,init:function(){$(".info_map_color_toggler").click(this.toggleMapColors)},toggleMapColors:function(l){l.preventDefault();var o=$("#map_color_assignment");o.toggle(),o.is(":visible")&&TribalWars.get("info_ally",{ajax:"map_color",id:InfoAlly.ally_id},function(l){$("#map_color_assignment").html(l.content)})}}}();
