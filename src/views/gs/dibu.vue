<template>
    <div>
        <!--底部-->
	     <div class="dibu">
	     	<div class="dibu-top">
	     	<ul class="guanyu">
	     		<li class="dibu-top-1"><a>关于我们</a></li>
	     		<li class="dibu-top-1"><a>联系方式</a></li>
	     		<li class="dibu-top-1"><a>合作伙伴</a></li>
	     		<li class="dibu-top-1"><a>媒体报道</a></li>
	     		<li class="dibu-top-1"><a>关于我们</a></li>
	     		<li class="dibu-top-1"><a>关于我们</a></li>
	     		<li class="dibu-top-1"><a>关于我们</a></li>
	     		<li class="dibu-top-1"><a>关于我们</a></li>	
	     	</ul>
	     	</div>
	     	<hr />
	     	<div class="dibu-xia">
	     		<div class="dibu-xia-left">
	     		<dl class="dibu-tit">
	     			<dt>服务标准</dt>
	     			<dd>客服一对一梳理需求</dd>
	     			<dd>短时间内提供初步报价</dd>
	     			<dd>御弟哥哥提供全程质量监控</dd>
	     		</dl>
	     		<dl class="dibu-tit">
	     			<dt style="margin-left: 0px;">热门业务</dt>
	     			<dd>软件开发</dd>
	     			<dd>网站开发</dd>
	     			<dd>app开发</dd>	
	     		</dl>
	     		<dl class="dibu-tit">
	     			<dt>本期精选</dt>
	     			<dd>软件开发费用指南</dd>
	     			<dd>个性化定制小程序</dd>
	     			<dd>微信二次开发技巧</dd>
	     		</dl>
	     		</div>
	     		<div class="dbu-xia-right">
                    <img :src="cfs" alt="">

	     			<p>扫描二维码下载软件</p>
	     		</div>
	     	</div>
	     	<hr />
	     	<div class="jiewei">
	     		<p>北京御弟哥哥网络科技有限公司 版权所有 (网站应用服务许可证：京ICP备2322326222325号) </p>
	     	</div>
	     </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cfs:require('@/assets/erweima.png')
            }
        }
    }
    

        
    
</script>

<style>
    /*底部*/
			.dibu{
				background-color: #232830;
				height: 300px;
				
			}
			.dibu-top{
				width: 1200px;
				/*border: 1px solid forestgreen;*/
				margin: auto;
				color: #999;
				height: 60px;
				display: flex;
				justify-content: center;	
			}
			.dibu-top-1{
				list-style: none;
				float: left;
				width: 100px;
				margin-right: 10px;
				text-align: center;
				margin-top: 20px;
				/*line-height: 60px;*/
				border-right: 1px solid #999;

			}
			.dibu-top-1 a{
				cursor: pointer;	
			}
			.dibu-xia{
				width: 1200px;
				/*border: 1px solid forestgreen;*/
				margin: auto;
				color: #999;
				height: 180px;
				display: flex;
			}
			.dibu-xia-left{
				width: 900px;
				height: 180px;
				/*background-color: salmon;*/
				
			}
			.dibu-tit{
				float: left;
				width: 260px;
				margin-right: 20px;
				cursor: pointer;
				/*text-align: center;*/
				/*border: 1px solid gold;*/
			}
			.dibu-tit dt{
				margin-left: 20px;
				margin-top: 30px;
				margin-bottom: 20px;
				cursor: pointer;
			}
			.dibu-tit dd{
				font-size: 14px;
				margin-bottom: 10px;
				cursor: pointer;
			}
			.dbu-xia-right{
				width: 300px;
				text-align: center;
				color: white;
			}
			.dbu-xia-right img{
				margin-top: 10px;
				width: 130px;
				height: 130px;
			}
			.jiewei{
				height: 60px;
				color: #999;
				font-size: 14px;
				line-height: 60px;
				text-align: center;
			}
</style>