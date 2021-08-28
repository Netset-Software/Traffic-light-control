
<style type="text/css">
.both{
	display: flex;justify-content: space-between;
}
.signal{
	display: flex;
	flex-direction: column;
	width: 50px;
	padding: 10px;
	background-color: #ccc;
	border: 2px solid #000;
}

.signal1,.signal4{
	text-align: center;
	margin: 0 auto;
}

.count1, .count2, .count3, .count4, .light{
	padding: 9px 0;
	margin: 5px;
	border-radius: 50%;
	text-align: center;
}

.light-red{
	background-color: red;
}
.light-green{
	background-color: green;
}
.light-yellow{
	background-color: yellow;
}
.disabled{
	opacity: .3;
}

.signal2{
	float: right;
}
.signal3{
	float: left;
}
.signal4{
	clear: both;
	margin-top: 20px;
}
</style>
<div class="main">
	<div class="signal signal1 active">
		<span class="count1" style="color:green;" data-count-val="30">10</span>
		<span id="light1" class="light disabled light-red " style="border-radius: 50%;">S</span>
		<span id="light1" class="light light-green active" style="border-radius: 50%;">G</span>
		<span id="light1" class="light disabled light-yellow" style="border-radius: 50%;">W</span>
	</div>
	<!-- <div class="both"></div> -->
	<div class="signal signal2">
		<span class="count2" data-count-val="30">10</span>
		<span id="light2" class="light light-red" style="border-radius: 50%;">S</span>
		<span id="light2" class="light disabled light-green" style="border-radius: 50%;">G</span>
		<span id="light2" class="light disabled light-yellow" style="border-radius: 50%;">W</span>
	</div>
	<div class="signal signal3">
		<span class="count3" data-count-val="30">20</span>
		<span id="light3" class="light light-red" style="border-radius: 50%;">S</span>
		<span id="light3" class="light disabled light-green" style="border-radius: 50%;">G</span>
		<span id="light3" class="light disabled light-yellow" style="border-radius: 50%;">W</span>
		</div>
	<div class="signal signal4">
		<span class="count4" data-count-val="30">30</span>
		<span id="light4" class="light light-red" style="border-radius: 50%;">S</span>
		<span id="light4" class="light disabled light-green" style="border-radius: 50%;">G</span>
		<span id="light4" class="light disabled light-yellow" style="border-radius: 50%;">W</span>
	</div>
</div>

<script src="jquery.min.js"></script>
<script type="text/javascript">
	$(document).ready(function(){

		var light_duration = 10000;

		function handle_yellow(){
			var signal = $('.signal.active');
			// $('.light-yellow').removeClass('disabled');
			signal.find('.light-yellow').removeClass('disabled');
			if(signal.next().length){
				signal.next().find('.light-yellow').removeClass('disabled');
			}else{
				$('.main').find('.signal').first().find('.light-yellow').removeClass('disabled');				
			}
		}

		function active_light2(){
			var signal = $('.signal.active');
			signal.find('.light-red').removeClass('disabled');
			signal.find('.light-yellow').addClass('disabled');

			signal.find('.light-green').addClass('disabled');
			signal.removeClass('active');

			if(signal.next().length){
				signal.next().find('.light-red').addClass('disabled');
				signal.next().addClass('active');
				signal.next().find('.light-green').removeClass('disabled');
				signal.next().find('.light-yellow').addClass('disabled');
			}else{
				$('.main').find('.signal').first().addClass('active');
				$('.main').find('.signal').first().find('.light-red').addClass('disabled');
				$('.main').find('.signal').first().find('.light-green').removeClass('disabled');
				$('.main').find('.signal').first().find('.light-yellow').addClass('disabled');
			}
		}

		function handle_count(div_class){
			if($('.'+div_class).parent().hasClass('active')){
				$('.'+div_class).css('color', 'green');
				if(parseInt($('.'+div_class).text()) > 0 || isNaN(parseInt($('.'+div_class).text()))){
					$('.'+div_class).text(parseInt($('.'+div_class).text()) - 1);
				}else{
					$('.'+div_class).text('9');
				}
			}else{
				$('.'+div_class).css('color', 'red');
				if(parseInt($('.'+div_class).text()) > 0){
					$('.'+div_class).text(parseInt($('.'+div_class).text()) - 1);
				}else{
					$('.'+div_class).text(parseInt($('.'+div_class).attr('data-count-val')));
				}
			}
		}

		setInterval(function(){
			handle_count('count1')
			handle_count('count2')
			handle_count('count3')
			handle_count('count4')
		},1000)

		setTimeout(function(){
			handle_yellow();
		},8000)

		setInterval(function(){
			active_light2();
			setTimeout(function(){
				handle_yellow();
			},8000)
			
		},light_duration)
	})
</script>