
// params:
//    url,item

//    url  : location of the xml file
//    item : which item you want to play.

function loadxml(url,item)
      {
     var input         = new Object();
     var playlistarray = new Array();
     var relatedvideoslink = new Array();
     var endImage      = new Array();
     var endImageLink  = new Array();
     var font          = new Array();
     var size          = new Array();
     var facebookurl   = new Array();
     var twitterurl    = new Array();
     var playlistorder = new Array(); 
 
     var annotation_details = new Array();

        if (window.XMLHttpRequest)
           {
              xmlhttp=new XMLHttpRequest();
           }
       xmlhttp.open("GET",url,false);
       xmlhttp.send();
       xmlDoc=xmlhttp.responseXML;
       var doc = xmlDoc.getElementsByTagName("item"); 

       var playitemnumber = 0;
 
       var length = doc.length;

       for(var i=0;i<doc.length;i++)
        {
              if(xmlDoc.getElementsByTagName("videotag")[i].childNodes[0].nodeValue == item)
               {
                 playitemnumber = i;  
                 length = 1;
                 break;
               }
        }
          

         for (var j =0;j<length;j++)
           {
              
             if(playitemnumber > 0)
                  i = playitemnumber;
             else
                  i = j;             
  
               var playlist = new Object();
               var annotations  = new Array();
               var source_array = new Array();
           

               playlist.image = xmlDoc.getElementsByTagName("image")[i].childNodes[0].nodeValue;
               playlist.title = xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue;
            
           
               var source =  doc[i].getElementsByTagName("source");
               console.log("i value is : ",i);
     // creates playlist with multiple bitrates(files)          

     // source is 0 - because each item contains only one playlist
        
              for(var filecount = 0; filecount < source[0].getElementsByTagName("file_details").length; filecount++)
               { 
                  console.log("file count is : ",filecount);
                 var file_details = new Object(); 
                 file_details.file   = source[0].getElementsByTagName("file")[filecount].childNodes[0].nodeValue;                 
                 file_details.height = source[0].getElementsByTagName("height")[filecount].childNodes[0].nodeValue;                 
                 file_details.width  = source[0].getElementsByTagName("width")[filecount].childNodes[0].nodeValue;                 
                 file_details.label  = source[0].getElementsByTagName("label")[filecount].childNodes[0].nodeValue; 
                 source_array[filecount] = file_details;                 
               }
               playlist.sources = source_array;

              
               if(xmlDoc.getElementsByTagName("relatedvideoslink")[i])
                 { 
                   relatedvideoslink[j]  = xmlDoc.getElementsByTagName("relatedvideoslink")[i].childNodes[0].nodeValue;
                 }
           
               if(xmlDoc.getElementsByTagName("endImage")[i])
                 {
                   endImage[j]  = xmlDoc.getElementsByTagName("endImage")[i].childNodes[0].nodeValue;  
                 }

               if(xmlDoc.getElementsByTagName("endImageUrl")[i])
                 {
                   endImageLink[j]  = xmlDoc.getElementsByTagName("endImageUrl")[i].childNodes[0].nodeValue;  
                 }

               playlistarray[j] = playlist;
               font[j]       = xmlDoc.getElementsByTagName("font")[i].childNodes[0].nodeValue;
               size[j]  =xmlDoc.getElementsByTagName("font_size")[i].childNodes[0].nodeValue;
               facebookurl[j]  =xmlDoc.getElementsByTagName("facebookurl")[i].childNodes[0].nodeValue;
               twitterurl[j]   =xmlDoc.getElementsByTagName("twitterurl")[i].childNodes[0].nodeValue;

               var annotation = doc[i].getElementsByTagName("annotation");
            
                for(k=0;k< annotation.length;k++) 
                 {
                   var sub_annotations = new Object();
                       sub_annotations['starttime']  = annotation[k].getElementsByTagName('starttime')[0].childNodes[0].nodeValue;
                       sub_annotations['location']  = annotation[k].getElementsByTagName('location')[0].childNodes[0].nodeValue;
                       sub_annotations['annotationclickurl']  = annotation[k].getElementsByTagName('url')[0].childNodes[0].nodeValue;
                       sub_annotations['type']  = annotation[k].getElementsByTagName('type')[0].childNodes[0].nodeValue;
                       if(sub_annotations['type'] == 'image')
                            sub_annotations['imageurl']  = annotation[k].getElementsByTagName('imageurl')[0].childNodes[0].nodeValue;
                       else if(sub_annotations['type'] == 'text')
                            sub_annotations['text']  = annotation[k].getElementsByTagName('text')[0].childNodes[0].nodeValue;
                       else 
                          {
                            sub_annotations['text']  = annotation[k].getElementsByTagName('text')[0].childNodes[0].nodeValue;
                            sub_annotations['imageurl']  = annotation[k].getElementsByTagName('imageurl')[0].childNodes[0].nodeValue;
                          }
                       annotations[k] = sub_annotations;
                 }
               console.log(annotations);
               annotation_details[j] = annotations; 
               
               // we need to take care one more condition whatif we dont have any annotation tag 
          }
        console.log("playlist details",playlistarray);

        input.playlist =  playlistarray;
        input.relatedvideos = relatedvideoslink;
        input.endImage      = endImage;
        input.endImageLink  = endImageLink;
        input.font          = font;
        input.size          = size;
        input.facebookurl   = facebookurl;
        input.twitterurl    = twitterurl;
        input.annotationdetails = annotation_details;
 
        return input;
      }
