(function(){
    console.log('[php] loaded');
    
    const patt = /\.[0-9a-z]+$/i;
    const FILE = document.getElementById('file-uploader-input');
    const OUTPUT_F = document.getElementById('f-list');
    const IMG_OUT = document.getElementById('fiext');


    FILE.onchange = function(){

        let extension =  patt.exec(FILE.files[0].name)[0].toLowerCase();
        let tmpname = "";
        if (FILE.files[0].name.length > 32)
        {
            tmpname = FILE.files[0].name.substr(0, 32) + extension;
        }
        else
        {
            tmpname = FILE.files[0].name;
        }
        OUTPUT_F.innerHTML = tmpname;

        switch(extension)
        {
			case '.3gp':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/3gp.png';

				break;
			
			case '.7z':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/7z.png';

				break;
			
			case '.ae':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/ae.png';

				break;
			
			case '.ai':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/ai.png';

				break;
			
			case '.apk':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/apk.png';

				break;
			
			case '.asf':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/asf.png';

				break;
			
			case '.avi':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/avi.png';

				break;
			
			case '.bak':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/bak.png';

				break;
			
			case '.bmp':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/bmp.png';

				break;
			
			case '.cdr':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/cdr.png';

				break;
			
			case '.css':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/css.png';

				break;
			
			case '.csv':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/csv.png';

				break;
			
			case '.def-file':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/def-file.png';

				break;
			
			case '.default':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/default.png';

				break;
			
			case '.divx':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/divx.png';

				break;
			
			case '.dll':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/dll.png';

				break;
			
			case '.doc':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/doc.png';

				break;
			
			case '.docx':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/docx.png';

				break;
			
			case '.dw':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/dw.png';

				break;
			
			case '.dwg':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/dwg.png';

				break;
			
			case '.eps':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/eps.png';

				break;
			
			case '.exe':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/exe.png';

				break;
			
			case '.flv':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/flv.png';

				break;
			
			case '.fw':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/fw.png';

				break;
			
			case '.gif':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/gif.png';

				break;
			
			case '.gz-2':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/gz-2.png';

				break;
			
			case '.gz':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/gz.png';

				break;
			
			case '.html':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/html.png';

				break;
			
			case '.ico':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/ico.png';

				break;
			
			case '.iso':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/iso.png';

				break;
			
			case '.jar':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/jar.png';

				break;
			
			case '.jpg':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/jpg.png';

				break;
			
			case '.js':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/js.png';

				break;
			
			case '.mov':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/mov.png';

				break;
			
			case '.mp3':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/mp3.png';

				break;
			
			case '.mp4':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/mp4.png';

				break;
			
			case '.mpeg':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/mpeg.png';

				break;
			
			case '.pdf':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/pdf.png';

				break;
			
			case '.php':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/php.png';

				break;
			
			case '.png':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/png.png';

				break;
			
			case '.ppt':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/ppt.png';

				break;
			
			case '.ps':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/ps.png';

				break;
			
			case '.psd':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/psd.png';

				break;
			
			case '.rar':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/rar.png';

				break;
			
			case '.svg':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/svg.png';

				break;
			
			case '.swf':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/swf.png';

				break;
			
			case '.sys':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/sys.png';

				break;
			
			case '.tar':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/tar.png';

				break;
			
			case '.tiff':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/tiff.png';

				break;
			
			case '.txt':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/txt.png';

				break;
			
			case '.wav':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/wav.png';

				break;
			
			case '.zip':

				IMG_OUT.style.visibility = 'visible';
				IMG_OUT.src = 'img/exts/zip.png';

                break;
                
            default:
                IMG_OUT.style.visibility = 'visible';
                IMG_OUT.src = 'img/exts/def-file.png';
                break;
                
        }
        
        
    }
})();