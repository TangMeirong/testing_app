(function(){
	$.init();
		// 加载flag
	      var loading = false;
	      // 最多可加载的条目
	      var maxItems = 26;

	      // 每次加载添加多少条目
	      var itemsPerLoad = 6;

	      function addItems(number, lastIndex) {
	              // 生成新条目的HTML
	              var html = '';
	              for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
	                  html += '<li class="card"><div class="card-header"><!-- 订单号 --><span class="codeBox">订单号：<span class="code">32543534534</span></span><!-- 交易状态 --><span class="statusBox">交易状态：<span class="status">成功</span></span></div><div class="card-content"><div class="card-content-inner row"><!-- 滤网图片 --><img src="static/app/img/netImg.jpg" class="netImg col-33"><div><!-- 滤网名称 --><h2>HEPA 高密度碳滤网</h2><!-- 滤网说明 --><span class="config">适配机型：X80、X100、X120</span><p class="clearfix"><!-- 购买数量 --><span class="quantityBox">数量： <span class="quantity">1</span></span><!-- 购买合计金额 --><span class="amountBox">合计：<span class="amount">100元</span></span></p></div></div></div><div class="card-footer"></div></li>';
	              }
	              // 添加新条目
	              $('.infinite-scroll-bottom .list-container').append(html);

	          }
	          //预先加载2条
	      addItems(itemsPerLoad, 0);

	      // 上次加载的序号

	      var lastIndex = 6;

	      // 注册'infinite'事件处理函数
	      $(document).on('infinite', '.infinite-scroll-bottom',function() {

	          // 如果正在加载，则退出
	          if (loading) return;

	          // 设置flag
	          loading = true;

	          // 模拟1s的加载过程
	          setTimeout(function() {
	              // 重置加载flag
	              loading = false;

	              if (lastIndex >= maxItems) {
	                  // 加载完毕，则注销无限加载事件，以防不必要的加载
	                  $.detachInfiniteScroll($('.infinite-scroll'));
	                  // 删除加载提示符
	                  $('.infinite-scroll-preloader').remove();
	                  return;
	              }

	              // 添加新条目
	              addItems(itemsPerLoad, lastIndex);
	              // 更新最后加载的序号
	              lastIndex = $('.list-container li').length;
	              //容器发生改变,如果是js滚动，需要刷新滚动
	              $.refreshScroller();
	          }, 1000);
	      });
}())