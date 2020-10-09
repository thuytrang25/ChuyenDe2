import React from 'react';


const SignUp = function(){
	return(
	<div className = "form">
		<h2>ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</h2>
		<p className = "contentsb">
			Công nghệ thay đổi nhanh chóng, hãy cùng vươn ra thế giới
			với những bài viết chất lượng từ Fullstack Station bạn nhé
		</p>

		<input className = "ipadd" id = "input1" type = "text" name = "name" value = "TÊN CỦA BẠN"/>

		<input className = "ipadd" type = "text" name = "email" value = "EMAIL CỦA BẠN"/>

		
		<form id = "form">
			<label id = "label">
			<input type = "submit" id = "inputsubmit" value = "" />I ... to my submitted data basing collected via thí form *
			</label>
		</form>

		<input className = "ipadd" type = "text" name = "dangky" value = "ĐĂNG KÝ"/>

		<p className = "contentsb">
			Bạn sẽ nhận được email thông báo khi có bài biết mới, mình không
			spam vì mình cũng rất ghét :)
		</p>

	</div>
	);
}

const News = function(){
	return(
	<div className = "news">
		<h2 id = "titlenews">BÀI VIẾT MỚI</h2>

		<ul>
			<li>
				<img className = 'imgSB' id="6" src={require('../src/image/6.jpg')} alt =  "Load image fail "/>	
				<h2 className = 'title'>Hãy sẵn sàng với serverless</h2>	
				<p>
					Hướng dẫn học React js sao cho hiệu quả. Nếu bạn mới làm quen
					với Reactjs (Hoặc phần front-end nói chung...
				</p>			
			</li>

			<li>
				<img className = 'imgSB' id="7" src={require('../src/image/7.jpg')}  alt =  "Load image fail "/>	
				<h2 className = 'title'>Fullstack Station chuyển tên miền từ Business Card</h2>	
				<p>
					Sau một thời gian tìm hiểu và áp dụng rất hiệu quả, hôm nay mình
					chia sẻ với các bạn cấu trúc như...
				</p>			
			</li>

			<li>
				<img className = 'imgSB' id="8" src={require('../src/image/8.jpg')} alt =  "Load image fail "/>
				<h2 className = 'title'>Áp dụng các chiêu thức võ học vào lập trình</h2>						
				<p>
					Trên trang chủ của Reactjs thì các mã ví dụ đều được viết bằng ES6, mặc dù
					viết bằng ES5 hay ES6...
				</p>
			</li>

			<li>
				<img className = 'imgSB' id="9" src={require('../src/image/9.jpg')} alt =  "Load image fail "/>	
				<h2 className = 'title'>Kinh nghiệm dành cho người mới bắt đầu lập trình Python</h2>					
				<p>
					Câu hỏi: khi nào thì nên sử dụng Application State &lcub; &copy Redux Store&rcub; khi nào thì nên
					sử dụng Local...
				</p>
			</li>

			<li>
				<img className = 'imgSB' id="10" src={require('../src/image/10.png')} alt =  "Load image fail "/>
				<h2 className = 'title'>hướng dẫn tạo graphql server</h2>				
				<p>
                Hầu hết chúng ta có thể rất quen thuộc với việc tạo REST API. GraphQL là một query language được
                tạo ra bởi Facebook với mục đích xây dựng các ứng dụng cho khách hàng...
				</p>
			</li>

		</ul>

	</div>
	);
}

const Sidebour = function() {
	return (
		<div className = "sidebour">
			<SignUp />
			<News />
		</div>

	);
}
export default Sidebour;