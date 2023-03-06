export const slideLeft = {
    visible: (i = 0) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            delay: i * 0.1,
            type: 'easeIn'
        }
    }),
    hidden: {
        opacity: 0,
        x: 100,
        y: 0
    }
}
export const zoomOut = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3,
            type: 'easeIn'
        }
    },

    hidden: {
        opacity: 0,
        scale: 1.4,
        transition: {
            when: 'afterChildren'
        }
    }
}
export const zoomIn = {
    visible: {
        opacity: 1,
        scale: 1
    },
    hidden: {
        opacity: 0,
        scale: 0.2
    }
}

export const nothing = {
    visible: {},
    hidden: {}
}
