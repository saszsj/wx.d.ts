// Type definitions for wx app
// Definitions by: hellopao <https://github.com/hellopao/wx.d.ts>

/************************************************
*                                               *
*                 微信小程序  API                *
*                                               *
************************************************/

interface IAnimation {
    /**
     * 透明度，参数范围 0~1
     */
    opacity(value: number): IAnimation;
    /**
     * 颜色值
     */
    backgroundColor(color: string): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    width(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    height(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    top(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    left(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    bottom(length: number): IAnimation;
    /**
     * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
     */
    right(length: number): IAnimation;
    /**
     * deg的范围-180~180，从原点顺时针旋转一个deg角度
     */
    rotate(deg: number): IAnimation;
    /**
     * deg的范围-180~180，在X轴旋转一个deg角度
     */
    rotateX(deg: number): IAnimation;
    /**
     * deg的范围-180~180，在Y轴旋转一个deg角度
     */
    rotateY(deg: number): IAnimation;
    /**
     * deg的范围-180~180，在Z轴旋转一个deg角度
     */
    rotateZ(deg: number): IAnimation;
    /**
     * 同transform-function rotate3d
     */
    rotate3d(x: number, y: number, z: number, deg: number): IAnimation;
    /**
     * 一个参数时，表示在X轴、Y轴同时缩放sx倍数；两个参数时表示在X轴缩放sx倍数，在Y轴缩放sy倍数
     */
    scale(sx: number, sy?: number): IAnimation;
    /**
     * 在X轴缩放sx倍数
     */
    scaleX(sx: number): IAnimation;
    /**
     * 在Y轴缩放sy倍数
     */
    scaleY(sy: number): IAnimation;
    /**
     * 在Z轴缩放sy倍数
     */
    scaleZ(sz: number): IAnimation;
    /**
     * 在X轴缩放sx倍数，在Y轴缩放sy倍数，在Z轴缩放sz倍数
     */
    scale3d(sx: number, sy: number, sz: number): IAnimation;
    /**
     * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
     */
    translate(tx: number, ty?: number): IAnimation;
    /**
     * 在X轴偏移tx，单位px
     */
    translateX(tx: number): IAnimation;
    /**
     * 在Y轴偏移tx，单位px
     */
    translateY(tx: number): IAnimation;
    /**
     * 在Z轴偏移tx，单位px
     */
    translateZ(tx: number): IAnimation;
    /**
     * 在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
     */
    translate3d(tx: number, ty: number, tz: number): IAnimation;
    /**
     * 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
     */
    skew(ax: number, ay?: number): IAnimation;
    /**
     * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
     */
    skewX(ax: number): IAnimation;
    /**
     * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
     */
    skewY(ay: number): IAnimation;
    /**
     * 同transform-function matrix
     */
    matrix(a, b, c, d, tx, ty): IAnimation;
    /**
     * 同transform-function matrix3d
     */
    matrix3d(): IAnimation;
}

interface IContext {
    /**
     * 获取当前context上存储的绘图动作
     */
    getActions(): Array<any>;
    /**
     * 清空当前的存储绘图动作
     */
    clearActions(): void;
    /**
     * 对横纵坐标进行缩放
     */
    scale(scaleWidth: number/**横坐标缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */, scaleHeight: number/**	纵坐标轴缩放的倍数1 = 100%，0.5 = 50%，2 = 200%，依次类 */): void;
    /**
     * 对坐标轴进行顺时针旋转
     */
    rotate(deg: number/**degrees * Math.PI/180；degrees范围为0~360;旋转角度，以弧度计 */): void;
    /**
     * 对坐标原点进行缩放
     */
    translate(x: number/**水平坐标平移量 */, y: number/**竖直坐标平移量 */): void;
    /**
     * 保存当前坐标轴的缩放、旋转、平移信息
     */
    save(): void;
    /**
     * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
     */
    restore(): void;
    /**
     * 在给定的矩形区域内，清除画布上的像素
     */
    clearRect(x: number, y: number, width: number, height: number): void;
    /**
     * 在画布上绘制被填充的文本
     */
    fillText(text: string, x: number, y: number): void;
    /**
     * 在画布上绘制图像
     */
    drawImage(imageResource: string, x: number, y: number, width: number, height: number): void;
    /**
     * 对当前路径进行填充
     */
    fill(): void;
    /**
     * 对当前路径进行描边
     */
    stroke(): void;
    /**
     * 开始一个路径
     */
    beginPath(): void;
    /**
     * 关闭一个路径
     */
    closePath(): void;
    /**
     * 把路径移动到画布中的指定点，但不创建线条。
     */
    moveTo(x: number, y: number): void;
    /**
     * 添加一个新点，然后在画布中创建从该点到最后指定点的线条。
     */
    lineTo(x: number, y: number): void;
    /**
     * 添加一个矩形路径到当前路径。
     */
    rect(x: number, y: number, width: number, height: number): void;
    /**
     * 添加一个弧形路径到当前路径，顺时针绘制。
     */
    arc(x: number, y: number, radius: number, startAngle: number, sweepAngle: number): void;
    /**
     * 创建二次方贝塞尔曲线
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * 创建三次方贝塞尔曲线
     */
    bezierCurveTo(cpx1: number, cpy1: number, cpx2: number, cpy2: number, x: number, y: number): void;
    /**
     * 设置填充样式
     */
    setFillStyle(color: string): void;
    /**
     * 设置线条样式
     */
    setStrokeStyle(color: string): void;
    /**
     * 设置阴影
     */
    setShadow(offsetX: number, offsetY: number, blur: number, color: string): void;
    /**
     * 设置字体大小
     */
    setFontSize(fontSize: number): void;
    /**
     * 设置线条端点的样式
     */
    setLineCap(lineCap: 'butt' | 'round' | 'square'): void;
    /**
     * 设置两线相交处的样式
     */
    setLineJoin(lineJoin: 'bevel' | 'round' | 'miter'): void;
    /**
     * 设置线条宽度
     */
    setLineWidth(lineWidth: number): void;
    /**
     * 设置最大倾斜
     */
    setMiterLimit(miterLimit: number): void;
}

interface IAudioContext {
    /**
     * 播放 
     */
    play: () => void;	
    /**
     * 暂停 
     */
    pause: () => void;	
    /**
     * 跳转到指定位置，单位 s
     */
    seek: (position: number) => void;	
}

interface IVideoContext {
    /**
     * 播放 
     */
    play: () => void;	
    /**
     * 暂停 
     */
    pause: () => void;	
    /**
     * 跳转到指定位置，单位 s
     */
    seek: (position: number) => void;
    /**
     * 发送弹幕，danmu 包含两个属性 text, color。
     */
    sendDanmu: (danmu: {text: string; color: string;}) => void;
}

interface Application {
    setData: (obj: any) => void;
}

interface AppConstructor {
    new (): Application;
    (opts: {
        /**
         * 生命周期函数--监听小程序初始化
         */
        onLaunch?: () => void;
        /**
         * 生命周期函数--监听小程序显示
         */
        onShow?: () => void;
        /**
         * 生命周期函数--监听小程序隐藏
         */
        onHide?: () => void;

        [key: string]: any;
    }): Application;
}

declare var App: AppConstructor;
declare function getApp(): Application;

declare function getCurrentPages(): Page[];

interface Page {
    setData: (obj: any) => void;
}

interface PageConstructor {
    new (): Page;
    (opts: {
        /**
         * 页面的初始数据
         */
        data?: any;
        /**
         * 页面的初始数据
         */
        onLoad?: () => void;
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady?: () => void;
        /**
         * 生命周期函数--监听页面显示
         */
        onShow?: () => void;
        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide?: () => void;
        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload?: () => void;
        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefreash?: () => void;
        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom?: () => void;

        [key: string]: any;
    }): Page;
}

declare var Page: PageConstructor;

declare var wx: {
    // # 网络 # 
    
    /**
     * wx.request发起的是 HTTPS 请求。一个微信小程序，同时只能有5个网络请求连接。
     */
    request(obj: {
        /**
         * 开发者服务器接口地址
         */
        url: string;
        /**
         * 请求的参数
         */
        data?: any | string;
        /**
         * 设置请求的 header , header 中不能设置 Referer
         */
        header?: any;
        /**
         * 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         */
        method?: string;
    }): Promise<any>;
                    
    /**
     * 将本地资源上传到开发者服务器。如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。客户端发起一个 HTTPS POST 请求，其中 content-type 为 multipart/form-data 。
     */
    uploadFile(obj: {
        /**
         * 开发者服务器 url
         */
        url: string;
        /**
         * 要上传文件资源的路径
         */
        filePath: string;
        /**
         * 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
         */
        name: string;
        /**
         * HTTP 请求 Header , header 中不能设置 Referer
         */
        header?: any;
        /**
         * HTTP 请求中其他额外的 form data
         */
        formData?: any;
    }): Promise<any>;
                    
    /**
     * 下载文件资源到本地。客户端直接发起一个 HTTP GET 请求，返回文件的本地临时路径。
     */
    downloadFile(obj: {
        /**
         * 下载资源的 url
         */
        url: string;
        /**
         * HTTP 请求 Header
         */
        header?: any;
    }): Promise<any>;
                    
    /**
     * 创建一个 WebSocket 连接；一个微信小程序同时只能有一个 WebSocket 连接，如果当前已存在一个 WebSocket 连接，会自动关闭该连接，并重新创建一个 WebSocket 连接。
     */
    connectSocket(obj: {
        /**
         * 开发者服务器接口地址，必须是 wss 协议，且域名必须是后台配置的合法域名
         */
        url: string;
        /**
         * 请求的数据
         */
        data?: any;
        /**
         * HTTP Header , header 中不能设置 Referer
         */
        header?: any;
        /**
         * 默认是GET，有效值为： OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         */
        method?: string;
    }): Promise<any>;
                    
    /**
     * 监听WebSocket连接打开事件。
     */
    onSocketOpen(callback: Function): void;
                    
    /**
     * 监听WebSocket错误。
     */
    onSocketError(callback: Function): void;
                    
    /**
     * 通过 WebSocket 连接发送数据，需要先 wx.connectSocket，并在 wx.onSocketOpen 回调之后才能发送。
     */
    sendSocketMessage(obj: {
        /**
         * 需要发送的内容
         */
        data: undefined;
    }): Promise<any>;
                    
    /**
     * 监听WebSocket接受到服务器的消息事件。
     */
    onSocketMessage(callback: Function): void;
                    
    /**
     * 关闭WebSocket连接。
     */
    closeSocket(): void;
                    
    /**
     * 监听WebSocket关闭。
     */
    onSocketClose(callback: Function): void;
                    
    // # 媒体 # 
    
    /**
     * 从本地相册选择图片或使用相机拍照。
     */
    chooseImage(obj: {
        /**
         * 最多可以选择的图片张数，默认9
         */
        count?: number;
        /**
         * original 原图，compressed 压缩图，默认二者都有
         */
        sizeType?: string[];
        /**
         * album 从相册选图，camera 使用相机，默认二者都有
         */
        sourceType?: string[];
    }): Promise<any>;
                    
    /**
     * 预览图片。
     */
    previewImage(obj: {
        /**
         * 当前显示图片的链接，不填则默认为 urls 的第一张
         */
        current?: string;
        /**
         * 需要预览的图片链接列表
         */
        urls: string[];
    }): Promise<any>;
                    
    /**
     * 获取图片信息
     */
    getImageInfo(obj: {
        /**
         * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
         */
        src: string;
    }): Promise<any>;
                    
    /**
     * 开始录音。当主动调用wx.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。
     */
    startRecord(): Promise<any>;
                    
    /**
     * ​    主动调用停止录音。
     */
    stopRecord(): void;
                    
    /**
     * 开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放。
     */
    playVoice(obj: {
        /**
         * 需要播放的语音文件的文件路径
         */
        filePath: string;
    }): Promise<any>;
                    
    /**
     * 暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用 wx.stopVoice。
     */
    pauseVoice(): void;
                    
    /**
     * 结束播放语音。
     */
    stopVoice(): void;
                    
    /**
     * 获取音乐播放状态。
     */
    getBackgroundAudioPlayerState(): Promise<any>;
                    
    /**
     * 播放音乐，同时只能有一首音乐正在播放。
     */
    playBackgroundAudio(obj: {
        /**
         * 音乐链接
         */
        dataUrl: string;
        /**
         * 音乐标题
         */
        title?: string;
        /**
         * 封面URL
         */
        coverImgUrl?: string;
    }): Promise<any>;
                    
    /**
     * 暂停播放音乐。
     */
    pauseBackgroundAudio(): void;
                    
    /**
     * 控制音乐播放进度。
     */
    seekBackgroundAudio(obj: {
        /**
         * 音乐位置，单位：秒
         */
        position: number;
    }): Promise<any>;
                    
    /**
     * 停止播放音乐。
     */
    stopBackgroundAudio(): void;
                    
    /**
     * 监听音乐播放。
     */
    onBackgroundAudioPlay(callback: Function): void;
                    
    /**
     * 监听音乐暂停。
     */
    onBackgroundAudioPause(callback: Function): void;
                    
    /**
     * 监听音乐停止。
     */
    onBackgroundAudioStop(callback: Function): void;
                    
    /**
     * 保存文件到本地。
     */
    saveFile(obj: {
        /**
         * 需要保存的文件的临时路径
         */
        tempFilePath: string;
    }): Promise<any>;
                    
    /**
     * 获取本地已保存的文件列表
     */
    getSavedFileList(): Promise<any>;
                    
    /**
     * 获取本地文件的文件信息
     */
    getSavedFileInfo(obj: {
        /**
         * 文件路径
         */
        filePath: string;
    }): Promise<any>;
                    
    /**
     * 删除本地存储的文件
     */
    removeSavedFile(obj: {
        /**
         * 需要删除的文件路径
         */
        filePath: string;
    }): Promise<any>;
                    
    /**
     * 新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx
     */
    openDocument(obj: {
        /**
         * 文件路径，可通过 downFile 获得
         */
        filePath: string;
    }): Promise<any>;
                    
    /**
     * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
     */
    chooseVideo(obj: {
        /**
         * album 从相册选视频，camera 使用相机拍摄，默认为：['album', 'camera']
         */
        sourceType?: string[];
        /**
         * 拍摄视频最长拍摄时间，单位秒。最长支持60秒
         */
        maxDuration?: number;
        /**
         * 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
         */
        camera?: string[];
    }): Promise<any>;
                    
    /**
     * 创建并返回 audio 上下文 audioContext 对象
     */
    createAudioContext(): IAudioContext;
                    
    /**
     * 创建并返回 video 上下文 videoContext 对象
     */
    createVideoContext(): IVideoContext;
                    
    // # 数据 # 
    
    /**
     * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
     */
    setStorage(obj: {
        /**
         * 本地缓存中的指定的 key
         */
        key: string;
        /**
         * 需要存储的内容
         */
        data: any;
    }): Promise<any>;
                    
    /**
     * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
     */
    setStorageSync(key: string, data: any, ): void;
                    
    /**
     * 从本地缓存中异步获取指定 key 对应的内容。
     */
    getStorage(obj: {
        /**
         * 本地缓存中的指定的 key
         */
        key: string;
    }): Promise<any>;
                    
    /**
     * 从本地缓存中同步获取指定 key 对应的内容。
     */
    getStorageSync(key: string): void;
                    
    /**
     * 异步获取当前storage的相关信息
     */
    getStorageInfo(): Promise<any>;
                    
    /**
     * 同步获取当前storage的相关信息
     */
    getStorageInfoSync(): void;
                    
    /**
     * 从本地缓存中异步移除指定 key 。
     */
    removeStorage(obj: {
        /**
         * 本地缓存中的指定的 key
         */
        key: string;
    }): Promise<any>;
                    
    /**
     * 从本地缓存中同步移除指定 key 。
     */
    removeStorageSync(key: string): void;
                    
    /**
     * 清理本地数据缓存。
     */
    clearStorage(): void;
                    
    /**
     * 同步清理本地数据缓存
     */
    clearStorageSync(): void;
                    
    // # 位置 # 
    
    /**
     * 获取当前的地理位置、速度。
     */
    getLocation(obj: {
        /**
         * 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于wx.openLocation的坐标
         */
        type?: string;
    }): Promise<any>;
                    
    /**
     * 打开地图选择位置
     */
    chooseLocation(obj: {
        /**
         * 用户取消时调用
         */
        cancel?: Function;
    }): Promise<any>;
                    
    /**
     * ​    使用微信内置地图查看位置
     */
    openLocation(obj: {
        /**
         * 纬度，范围为-90~90，负数表示南纬
         */
        latitude: number;
        /**
         * 经度，范围为-180~180，负数表示西经
         */
        longitude: number;
        /**
         * 缩放比例，范围1~28，默认为28
         */
        scale?: number;
        /**
         * 位置名
         */
        name?: string;
        /**
         * 地址的详细说明
         */
        address?: string;
    }): Promise<any>;
                    
    // # 设备 # 
    
    /**
     * 获取网络类型。
     */
    getNetworkType(): Promise<any>;
                    
    /**
     * 获取系统信息。
     */
    getSystemInfo(): Promise<any>;
                    
    /**
     * 获取系统信息同步接口
     */
    getSystemInfoSync(): void;
                    
    /**
     * 监听重力感应数据，频率：5次/秒
     */
    onAccelerometerChange(callback: Function): void;
                    
    /**
     * 监听罗盘数据，频率：5次/秒
     */
    onCompassChange(callback: Function): void;
                    
    makePhoneCall(obj: {
        /**
         * 需要拨打的电话号码
         */
        phoneNumber: string;
    }): Promise<any>;
                    
    // # 界面 # 
    
    /**
     * 显示消息提示框
     */
    showToast(obj: {
        /**
         * 提示的内容
         */
        title: string;
        /**
         * 图标，只支持"success"、"loading"
         */
        icon?: string;
        /**
         * 提示的延迟时间，单位毫秒，默认：1500, 最大为10000
         */
        duration?: number;
    }): Promise<any>;
                    
    /**
     * 隐藏消息提示框
     */
    hideToast(): void;
                    
    /**
     * ​显示模态弹窗
     */
    showModal(obj: {
        /**
         * 提示的标题
         */
        title: string;
        /**
         * 提示的内容
         */
        content: string;
        /**
         * 是否显示取消按钮，默认为 true
         */
        showCancel?: boolean;
        /**
         * 取消按钮的文字，默认为"取消"，最多 4 个字符
         */
        cancelText?: string;
        /**
         * 取消按钮的文字颜色，默认为"#000000"
         */
        cancelColor?: undefined;
        /**
         * 确定按钮的文字，默认为"确定"，最多 4 个字符
         */
        confirmText?: string;
        /**
         * 确定按钮的文字颜色，默认为"#3CC51F"
         */
        confirmColor?: undefined;
    }): Promise<any>;
                    
    /**
     * ​显示操作菜单
     */
    showActionSheet(obj: {
        /**
         * 按钮的文字数组，数组长度最大为6个
         */
        itemList: undefined;
        /**
         * 按钮的文字颜色，默认为"#000000"
         */
        itemColor?: undefined;
    }): Promise<any>;
                    
    /**
     * 动态设置当前页面的标题。
     */
    setNavigationBarTitle(obj: {
        /**
         * 页面标题
         */
        title: string;
    }): Promise<any>;
                    
    /**
     * 在当前页面显示导航条加载动画。
     */
    showNavigationBarLoading(): void;
                    
    /**
     * 隐藏导航条加载动画。
     */
    hideNavigationBarLoading(): void;
                    
    /**
     * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
     */
    navigateTo(obj: {
        /**
         * 需要跳转的应用内页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'
         */
        url: string;
    }): Promise<any>;
                    
    /**
     * 关闭当前页面，跳转到应用内的某个页面。
     */
    redirectTo(obj: {
        /**
         * 需要跳转的应用内页面的路径
         */
        url: string;
    }): Promise<any>;
                    
    /**
     * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
     */
    navigateBack(obj: {
        /**
         * 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
         */
        delta?: number;
    }): Promise<any>;
                    
    /**
     * 创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
     */
    createAnimation(obj: {
        /**
         * 动画持续时间，单位ms，默认值 400
         */
        duration?: number;
        /**
         * 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
         */
        timingFunction?: string;
        /**
         * 动画延迟时间，单位 ms，默认值 0
         */
        delay?: number;
        /**
         * 设置transform-origin，默认为"50% 50% 0"
         */
        transformOrigin?: string;
    }): IAnimation;
                    
    /**
     * 创建并返回绘图上下文context对象。
     */
    createContext(): IContext;
                    
    drawCanvas(obj: {
        /**
         * 画布标识，传入 <canvas/> 的 cavas-id
         */
        canvasId: string;
        /**
         * 绘图动作数组，由 wx.createContext 创建的 context，调用 getActions 方法导出绘图动作数组。
         */
        actions: Array<any>;
        /**
         * 本次绘制是否接着上一次绘制，即reserve参数为false，则在本次调用drawCanvas绘制之前native层应先清空画布再继续绘制；若reserver参数为true，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false
         */
        reserve?: boolean;
    }): void;
                    
    /**
     * 把当前画布的内容导出生成图片，并返回文件路径
     */
    canvasToTempFilePath(obj: {
        /**
         * 画布标识，传入 <canvas/> 的 cavas-id
         */
        canvasId: string;
    }): void;
                    
    /**
     * 收起键盘。
     */
    hideKeyboard(): void;
                    
    /**
     * 停止当前页面下拉刷新。详见页面相关事件处理函数。
     */
    stopPullDownRefresh(): void;
                    
    // # 开放接口 # 
    
    /**
     * 调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。用户数据的加解密通讯需要依赖会话密钥完成。
     */
    login(): Promise<any>;
                    
    /**
     * 检查登陆态是否过期
     */
    checkSession(): Promise<any>;
                    
    /**
     * 发起微信支付。
     */
    requestPayment(obj: {
        /**
         * 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
         */
        timeStamp: string;
        /**
         * 随机字符串，长度为32个字符以下。
         */
        nonceStr: string;
        /**
         * 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*
         */
        package: string;
        /**
         * 签名算法，暂支持 MD5
         */
        signType: string;
        /**
         * 签名,具体签名方案参见微信公众号支付帮助文档;
         */
        paySign: string;
    }): Promise<any>;
                    
}