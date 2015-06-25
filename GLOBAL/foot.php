			<div class = "r" id = "mark">
				<canvas id="canvas1" width="500" height="50">
				</canvas>
				<!-- 
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ 
				-->
			</div>
			<script>
			var menu = document.getElementById("menu");
			var mb = document.getElementById("menu-base");
			var mh = document.getElementById("menu-hover");
			menu.onmouseover=function(){
				mb.style.visibility = "hidden";
				mh.style.visibility = "visible";
			}
			menu.onmouseout=function(){
				mh.style.visibility = "hidden";
				mb.style.visibility = "visible";
			}
			</script>
		</body>
	</div>
</html>
