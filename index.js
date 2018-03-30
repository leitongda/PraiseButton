// 作业点赞
class PraiseButton {
    constructor(num) {
        this.num = num;
    }
    addNum() {
        this.num++;
    }
}
class Thumb extends PraiseButton {};
let thumbObj = new Thumb(1);
export default { thumbObj };