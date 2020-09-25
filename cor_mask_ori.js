
			    //  初始化生成订单的数据
    var order = {
        pid: '',                //  产品id
        proname: '',            //  套餐名称
        spu: '',                //  套餐详情
        num: 1,                 //  套餐数量
        name: '',               //  下单人名称
        phone: '',              //  下单人手机
        ps_staus: 0,           //  选择的配送方式
        address: '',            //  配送地址
        shop: '',               //  选择的超商
        price: '',              //  选择的套餐的单价
        sum: '',                //  订单总价格
        content: '',            //  订单备注
        all_shop: '',           //  选择乡镇的所有超商
        email: '',              //  下单人的邮箱
        line_id: '',            //  下单人的line
        zp: '',                 //  选择的赠品
        country: '中国',        //  地区
        currency: '人民币',       //  货币类型  
        shop_id: '',            //  选择的超商id
        user_agent: '',         //  用户浏览器信息
        browser_info: {},       //  用户浏览器信息详情
        comment_click: '',      //  评论点击数
        order_click: '' ,       //  下单点击数
		oadid: '',      //  
		orid: '',      //  
		ocreativeid: '',      //  
		ocreativetype: '',      //  
		oclickid: '',      //  
		dummy: '',      //  
		oconvertid: ''      //  
		

    };
		$("#submit").click(function () {
            var name = $("#name").val();
            var tellphone = $("#phone").val();
            var buyAddress = $("#address").val();
			
            if (!name) {
                $.toast('请输入姓名')
                return
            }
            if (!tellphone) {
                $.toast('请输入手机号')
                return
            }else{
                if(!$.isPhoneNo(tellphone)){
                    $.toast('请输入有效手机号')
                return
                }
            }
            if (!region) {
                $.toast('请选择地区')
                return
            }
            if (!buyAddress) {
                $.toast('请输入地址')
                return
            }
			
            var goodsSkuId = new Array();
            $('.goodsSkuId').each(function () {
                goodsSkuId.push($(this).val());//添加至数组
            })
		        //  赋值给订单信息，提交
        order.pid = goodsId;
        order.name = name;
		order.proname = goodsSkuId[0];
        order.phone = tellphone;
        order.email = '';
        order.line_id = '';
        order.address = province+city+region+buyAddress;
        order.content = $("#mark").val();
        order.user_agent = navigator.userAgent;
		order.sum = price * quantity;
		order.num = quantity;
        order.browser_info = '';
        order.all_shop = '';
		order.oadid = adid;
		order.ocreativeid = creativeid;
		order.ocreativetype = creativetype;
		order.oclickid = clickid;
		order.oconvertid = convertid;
		order.orid = rid;
		order.dummy = 1;
        $.ajax({
			
            method: 'post',
            url: "/index/order/add",
            data: order,
            // async: false,
            beforeSend: function() {
				createMask();
				showMask();
            },
            success: function(res) {
				closeMask();
                if(res.code == '200'){
                    // alert('訂單提交成功');
                    //meteor.track("form", {convert_id :  <?php echo $re['convert_id']?>});
					//alert(<?php echo $re['convert_id']?>);
                    window.location.href = '/cg/'+res.id;
                }else{
                    alert(res.msg);
                }
            },
            done: function(res) {
                alert('訂單已提交，請等待');
            },
            fail: function(res) {
                alert('提交失敗，請稍後再試');
            }
        })
		});
				
				
			
		
	