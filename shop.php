<?
require_once("GLOBAL/head.php");
?><div id="body"><?
	// high-tops
	?>
	<div id="high-tops">
		<img 
			class="no-hover"
			src="http://mollys.us/MEDIA/paypal/high-outline.png" 
			style="width: 100%"
		>
		<img 
			class="hover"
			src="http://mollys.us/MEDIA/paypal/high-tan.png" 
			style="width: 100%"
		>
		<form 
			name="addhightops"
			target="paypal" 
			action="https://www.paypal.com/cgi-bin/webscr" 
			method="post"
		>
			<input type="hidden" name="cmd" value="_s-xclick">
			<input type="hidden" name="hosted_button_id" value="3GGJAM9224GQS">
			<table>
				<tr>
					<td><input type="hidden" name="on0" value="size">size</td>
					<td>
						<select name="os0">
							<option value="W 5">W 5 </option>
							<option value="W 5.5">W 5.5 </option>
							<option value="W 6">W 6 </option>
							<option value="W 6.5">W 6.5 </option>
							<option value="W 7">W 7 </option>
							<option value="W 7.5">W 7.5 </option>
							<option value="W 8 / M 6">W 8 / M 6 </option>
							<option value="W 8.5 / M 6.5">W 8.5 / M 6.5 </option>
							<option value="W 9 / M 7">W 9 / M 7 </option>
							<option value="W 9.5 / M 7.5">W 9.5 / M 7.5 </option>
							<option value="W 10 / M 8">W 10 / M 8 </option>
							<option value="W 10.5 / M 8.5">W 10.5 / M 8.5 </option>
							<option value="W 11 / M 9">W 11 / M 9 </option>
							<option value="W 11.5 / M 9.5">W 11.5 / M 9.5 </option>
							<option value="W 12 / M 10">W 12 / M 10 </option>
							<option value="M 10.5">M 10.5 </option>
							<option value="M 11">M 11 </option>
							<option value="M 11.5">M 11.5 </option>
							<option value="M 12">M 12 </option>
						</select>
					</td>
					<td><a id="hightops-button" href="javascript:document.addhightops.submit();">add to cart</a></td>
				</tr>
			</table>
		</form>
	</div><?
	// low-tops
	?><div id="low-tops">
		<img 
			class="no-hover" 
			src="http://mollys.us/MEDIA/paypal/low-outline.png" 
			style="width: 100%"
		>
		<img 
			class="hover" 
			src="http://mollys.us/MEDIA/paypal/low-tan.png" 
			style="width: 100%"
		>
		<form 
			name="addlowtops"
			target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post"
		>
			<input type="hidden" name="cmd" value="_s-xclick">
			<input type ="hidden" name="hosted_button_id" value="5JSZDTRUQ3SQ4">
			<table>
				<tr>
					<td><input type="hidden" name="on0" value="size">size</td>
					<td>
						<select name="os0">
							<option value="W 5">W 5 </option>
							<option value="W 5.5">W 5.5 </option>
							<option value="W 6">W 6 </option>
							<option value="W 6.5">W 6.5 </option>
							<option value="W 7">W 7 </option>
							<option value="W 7.5">W 7.5 </option>
							<option value="W 8 / M 6">W 8 / M 6 </option>
							<option value="W 8.5 / M 6.5">W 8.5 / M 6.5 </option>
							<option value="W 9 / M 7">W 9 / M 7 </option>
							<option value="W 9.5 / M 7.5">W 9.5 / M 7.5 </option>
							<option value="W 10 / M 8">W 10 / M 8 </option>
							<option value="W 10.5 / M 8.5">W 10.5 / M 8.5 </option>
							<option value="W 11 / M 9">W 11 / M 9 </option>
							<option value="W 11.5 / M 9.5">W 11.5 / M 9.5 </option>
							<option value="W 12 / M 10">W 12 / M 10 </option>
							<option value="M 10.5">M 10.5 </option>
							<option value="M 11">M 11 </option>
							<option value="M 11.5">M 11.5 </option>
							<option value="M 12">M 12 </option>
						</select>
					</td>
					<td><a id="lowtops-button" href="javascript:document.addlowtops.submit();">add to cart</a></td>
				</tr>
			</table>
		</form>
	</div>
</div><?
require_once("GLOBAL/foot.php");
?>