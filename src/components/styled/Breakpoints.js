const bp = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
}

const mq = (size) => `@media (min-width: ${bp[size]}px)`

export const mqFunc = (size) => {
    switch (size) {
        case 'sm':
            return mq(size)

        case 'md':
            return mq(size)

        case 'lg':
            return mq(size)

        case 'xl':
            return mq(size)

        case 'xxl':
            return mq(size)
    
        default:
            return mq('md')
    }
}