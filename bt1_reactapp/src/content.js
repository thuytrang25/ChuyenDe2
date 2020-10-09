import React from 'react';




const TitleContent = function(){
	return (
		<div id = 'titleContent'>
		<h1> SERIES: REACT JS: TỪ CƠ BẢN TỚI NÂNG CAO </h1>
		</div>
	);
}

const BlockContent = function(){
	return(
	<div className = 'content'>
			
			<ul>
				<li>
					<img className = 'img' id="img1" src={require("../src/image/1.jpg")} alt =  "Load image fail " />	
					<h2 className = 'title'>HƯỚNG DẪN HỌC REACT JS</h2>	
					<p>
						Hướng dẫn học React js sao cho hiệu quả. Nếu bạn mới làm quen
						với Reactjs (Hoặc phần front-end nói chung...
					</p>

					<button type="button" className="btn">READ MORE</button>
	
				</li>

				<li>
					<img className = 'img' id="img2" src={require("../src/image/2.jpg")} alt =  "Load image fail "/>	
					<h2 className = 'title'>HƯỚNG DẪN CẤU TRÚC THƯ MỤC VÀ CÁCH VIẾT COMPONENT CHUẨN TRONG REACT</h2>	
					<p>
						Sau một thời gian tìm hiểu và áp dụng rất hiệu quả, hôm nay mình
						chia sẻ với các bạn cấu trúc như...
					</p>	

					<button type="button" className="btn">READ MORE</button>		
				</li>

				<li>
					<img className = 'img' id="img3" src={require("../src/image/3.png")} alt =  "Load image fail "/>
					<h2 className = 'title'>HƯỚNG DẪN ĐẶT WEBPACK ĐỂ VIẾT REACTJS/ES6</h2>						
					<p>
						Trên trang chủ của Reactjs thì các mã ví dụ đều được viết bằng ES6, mặc dù
						viết bằng ES5 hay ES6...
					</p>

					<button type="button" className="btn">READ MORE</button>
				</li>

				<li>
					<img className = 'img' id="img4" src={require("../src/image/4.png")} alt =  "Load image fail "/>	
					<h2 className = 'title'>HƯỚNG DẪN SỬ DỤNG REDUX HIỆU QUẢ TRONG ỨNG DỤNG REACT</h2>					
					<p>
						Câu hỏi: khi nào thì nên sử dụng Application State &lcub; &copy Redux Store&rcub; khi nào thì nên
						sử dụng Local...
					</p>

					<button type="button" className="btn">READ MORE</button>
				</li>

				<li>
					<img className = 'img' id="img5" src={require("../src/image/5.jpg")} alt =  "Load image fail "/>
					<h2 className = 'title'>VÒNG ĐỜI CỦA COMPONENT TRONG REACTJS VỚI ES6</h2>				
					<p>
						Có thể nói, khái niệm component trong React là một trong những thành phần quan
						trọng nhất của....
					</p>

					<button type="button" className="btn">READ MORE</button>
				</li>

			</ul>
		</div>
	)
}


const Content = function() {
	return (
		<div>
			<TitleContent />
			<BlockContent />
		</div>
	);
}

export default Content;