class Swiper {
    constructor (options) {
        this.defaultOptions = {
            container: '.whdx-swiper',
            item: '.whdx-swiper-item',
            direction: 'x',
            activeClass: 'active',
            threshold: 50,
            duration: 300,
            auto: false,
            loop: false,
            interval: 3000,
            // 滑动的模块的间隔
            item_interval: 100,
            height: 'auto',
            width: '0',
            item_width: '800px',
            current_index: 0,
            minMovingDistance: 0
        }

        this._options = Object.assign({}, this.defaultOptions, options);
        this._options.height = this._options.height.replace('px', '');
        this._options.width = this._options.width.replace('px', '');
        this._options.item_width = this._options.item_width.replace('px', '');
        this.timer = null;
        this.$box = this._options.container;
        // swiper 容器
        this.$container = this._options.container.querySelector('.whdx-swiper');
        // swiper 元素
        this.$items = Array.from(this.$container.querySelectorAll(this._options.item));
        this.itemCount = this.$items.length;
        this.current_index = this._options.current_index;
        this._positions = [];
        this._offset = [];
        this._start = {};
        this._move = {};
        this._end = {};
        this._init();
        this._bindTouchEvent();
        this._onResize();
    }

    // stop
    stop() {
        this.timer && clearTimeout(this.timer);
    }

    _init() {
        this._initWidth();
        this._initPosition();
        this._setOffset();
        this._setTransform();
    }
    _initWidth() {
        this._width = this.$box.offsetWidth || document.documentElement.offsetWidth;
        // 设定的宽度不能宽于container的宽度
        if ( this._options.item_width > this._width) {
            this._item_width = this._width;
            this._item_interval = 0;
        } else {
            this._item_width = this._options.item_width;
            this._item_interval = (this._width - this._item_width) / 2 / 2
        }
        this.$items.forEach((item, index) => {
            item.style.width = `${this._item_width}px`
        })
    }
    _initPosition() {
        for(let i = 0;i < this.itemCount;i++) {
            this._positions.push(i);
        }
    }
    _setOffset() {
        this._offset = [];
        if ( this.current_index === 0) {
            this.$items.forEach( (item, index) => {
                let current_one;
                if (index === 0) {
                    current_one = +(this._item_interval * 2);
                } else {
                    current_one = +(this._offset[index-1] + this._item_interval + +this._item_width);
                }
                this._offset.push(current_one);
            })
        } else {
            this.$items.forEach( (item, index) => {
                let current_one;
                let offsetIndex = index - this.current_index;
                if (index === 0) {
                    current_one = (offsetIndex * +this._item_width) + ((offsetIndex + 1) * this._item_interval) + this._item_interval;
                } else {
                    current_one = +this._offset[index-1] + this._item_interval + +this._item_width;
                }
                this._offset.push(current_one);
            })
        }
    }
    _setActive(index) {
        let className = this._options.activeClass;
        this.$items.forEach((item, itemIndex) => {
            item.classList.remove(className);
            if (index === itemIndex) {
                item.classList.add(className);
            }
        })
    }
    _setTransition(duration) {
        duration = duration || (this._options.duration || 'none');
        let transition = duration === 'none' ? 'none' : duration + 'ms';
        this.$items.forEach(function ($item, key) {
            $item.style.webkitTransition = transition;
            $item.style.transition = transition;
        })
    }
    _setTransform (moveX) {
        const me = this;
        moveX = moveX || 0;
        this.$items.forEach(function ($item, key) {
            let distance = me._offset[key] + moveX;
            let transform = `translate3d(${distance}px, 0, 0)`;
            $item.style.webkitTransform = transform;
            $item.style.transform = transform;
            // me._isMoved = true
        })
    }
    go(index) {
        this._setTransition();
        index = index < 0 ? 0 : index > this.itemCount - 1 ? this.itemCount - 1 : index;
        this.current_index = index;
        this._setOffset();
        this._setTransform();
    }

    _bindTouchEvent() {
        const _this = this;
        this.touchstartHandler = e => {
            _this.stop();
            _this._start.x = e.changedTouches[0].pageX;
            _this._start.y = e.changedTouches[0].pageY;
            this._setTransition('none');
        };

        this.touchmoveHandler = e => {
            if ( this.itemCount <= 1) return;
            _this._move.x = e.changedTouches[0].pageX;
            let moveX = _this._move.x - _this._start.x;
            _this._setTransform(moveX);
            e.preventDefault();
        };

        this.touchendHandler = e => {
            if ( _this.itemCount <= 1) return;
            this._setTransition();
            _this._end.x = e.changedTouches[0].pageX;
            let moveX = _this._end.x - _this._start.x;
            if (moveX > 50) {
                _this.go(_this.current_index - 1);
            } else if (moveX < -50) {
                _this.go(_this.current_index + 1);
            } else {
                _this.go(_this.current_index)
            }
        };

        this.$container.addEventListener('touchstart', _this.touchstartHandler, false);
        this.$container.addEventListener('touchmove', _this.touchmoveHandler, false);
        this.$container.addEventListener('touchend', _this.touchendHandler, false);
    }

    _onResize () {
        const _this = this;
        this.resizeHandler = () => {
            setTimeout(() => {
                _this._init();
            }, 100)
        }
        window.addEventListener('resize', _this.resizeHandler, false);

        window.addEventListener('orientationchange', _this.resizeHandler, false)
    }

}

export default Swiper