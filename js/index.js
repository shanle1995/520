$(function(){
    var communicationList = new Vue({
        el: '#box_border',
        data: {
			Text:'不是',
			num:0
        },
        mounted:function () {
        },
        methods: {
			hover:function(){
				this.move();
			},
			move:function(){ 
				var W=$('.Nobutton')[0].clientWidth;
				var H=$('.Nobutton')[0].clientHeight;
				var X =Math.random()*this.$el.offsetWidth -W ;
				var Y =Math.random()*this.$el.offsetHeight -H;
				if(X >=this.$el.offsetWidth){
					X=this.$el.offsetWidth-W;
				}else if(X <=0){
					X=0;
				}else if(Y>=this.$el.offsetHeight){
					Y=this.$el.offsetHeight-H
				}else if(Y <=0){
					Y=0;
				}
				$('.Nobutton').css({
					left:X,
					top:Y
				})
				this.num +=1;
				console.log(this.num)
				this.changText();
			},
			changText:function(){
				if(this.num <= 5){
					this.Text = '点不到我吧！气不气？'
				}else if(this.num <= 8){
					this.Text = '哈哈哈哈哈点不到我吧'
				}else if(this.num <= 11){
					this.Text = '没有办法我就是这么强大'
				}else if(this.num <= 14){
					this.Text = '哈哈哈哈哈追不上我吧'
				}else if(this.num <= 16){
					this.Text = '啦啦啦啦啦啦啦啦啦啦啦'
				}else if(this.num <= 18){
					this.Text = '全都一起上吧我根本没在怕'
				}else if(this.num <= 20){
					this.Text = '哈哈哈哈哈皮不过我吧'
				}else if(this.num <= 22){
					this.Text = '啦啦啦啦啦啦啦啦啦啦啦'
				}else{
					this.Text = '还是点了吧。这已经是最后啦！'
				}
				
			},
			ShowButton:function(){
				$('.all').show()
				$('.Showbutton').hide()
				$('.Nobutton').hide()
			}
        }
    });
});