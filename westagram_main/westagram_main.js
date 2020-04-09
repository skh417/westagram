const comment = document.getElementById('reple')
const replyInputBt = document.getElementsByClassName('input-reply-button')[0];


// 밑에는 댓글창에 텍스트를 하나라도 쳤을때 '게시'버튼이 활성화 되게 해주는 기능
comment.addEventListener('keyup', changeBtColor);
function changeBtColor(){
    if(comment.value.length >= 1){
        replyInputBt.style.opacity = '1'
        replyInputBt.disabled = false;logo-img-container
        replyInputBt.style.cursor = 'pointer';
    } else if(comment.value.length<1) {
        replyInputBt.style.opacity = '0.4';
        replyInputBt.disabled = true;
        replyInputBt.style.cursor = 'default';
    }
}


const replyButton = document.getElementsByClassName('input-reply-button')[0]; // 댓글 입력 이벤트 발생이 함수가 적용될 위치
replyButton.addEventListener('click', commentUpload); //'게시' 버튼의 클릭 이벤트 트리거

//밑에는 댓글창에 엔터를 쳤을때 댓글이 입력될 수 있게 하는 기능
comment.addEventListener('keydown', function(x){
    if(comment.value.length >=1 && x.keyCode === 13){
        commentUpload();
    }
})


function commentUpload(){
    //console.log('합격') // 테스트
    let commentcontent = comment.value;
    let idDiv = document.getElementsByClassName('idcolumn')[0]; //아이디가 들어갈 div태그
    let inputMyId = document.createTextNode('sm.k.hn'); //내 아이디
    let commentDiv = document.getElementsByClassName('commentcolumn')[0]; //<div>댓글</div>이 들어갈 부모 div태그
    let idContainer = document.createElement('a'); //내 아이디를 감싸는 링크
    let commentContainer = document.createElement('div'); // 댓글을 감싸는 div
    idContainer.setAttribute('href','https://www.instagram.com/sm.k.hn/');// 링크 연결되는 주소
    let inputComment = document.createTextNode(commentcontent); // 댓글

    let hereIsComment = commentDiv.appendChild(commentContainer);
    hereIsComment.appendChild(inputComment);
    let hereIsATag = idDiv.appendChild(idContainer);
    hereIsATag.appendChild(inputMyId);
    comment.value = "";

   // let hereIsMyId = idContainer.appendChild(inputMyId); a태그 생성 -> a태그에 appendchild로 텍스트 넣고 이 걸 div에 넣으려고 시도하니 실패
   // idDiv.appendChild(hereIsMyId);  먼저 div에 a태그를 appendchild해서 넣은 후 a태그에 appendchild로 텍스트를 넣어야 되더라...

}


/*
comment.addEventListener('keyup',function(x){
    if(x.keyCode === 13){
        clickReplyButton();
    }
})

replyButton.addEventListener('click', clickReplyButton);
function clickReplyButton(){
    let replyText = comment.value;
    let replySpace = document.getElementsByClassName('feed-text-content')[0];
    let CommentContainer = document.createElement('div');
    CommentContainer.className = 'hereiscomment';
    let myInstaIdContainer = document.createElement('a');
 
    myInstaIdContainer.setAttribute('href','https://www.instagram.com/sm.k.hn/')
    let addComment = document.createTextNode(replyText);
    let myInstaId = document.createTextNode('sm.k.hn');
    let addMyIdContainer = replySpace.appendChild(myInstaIdContainer)
    let addCommentContainer = replySpace.appendChild(CommentContainer);
   
    addMyIdContainer.appendChild(myInstaId);
    
    addCommentContainer.appendChild(addComment);
}
*/

