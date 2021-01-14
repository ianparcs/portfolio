import React, {useEffect} from 'react';
import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";

const Contact = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <motion.div
            id={"contact"}
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{
                duration: 2,
                ease: "easeInOut"
            }}
            variants={{
                visible: {
                    opacity: 1,
                    x: "0",
                },
                hidden: {
                    opacity: 0,
                    x: "-100%",
                    transition: {duration: 1}
                },
            }}
        >
            Contact me
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae odio purus. Praesent vel erat
            velit. Ut
            scelerisque dolor non massa tincidunt, sed euismod dui varius. Mauris sed urna vitae sapien consectetur
            mollis vel nec nulla. Pellentesque sollicitudin malesuada nisl, nec tempor odio blandit vel. Maecenas
            ornare
            venenatis risus, vitae scelerisque elit fringilla id. Vivamus sagittis mi non auctor congue. Sed at diam
            pulvinar eros varius luctus nec sit amet tellus. Ut scelerisque posuere ipsum, vel commodo elit
            imperdiet
            congue. Donec risus ligula, porta a justo sit amet, sodales ultricies ligula. Nunc dapibus mattis
            libero,
            sit amet aliquet diam elementum at. Morbi ut sagittis sapien, non eleifend erat.

            Etiam vulputate ex est, vel porta nibh maximus a. Duis a nulla ac leo blandit tempus sit amet nec
            mauris.
            Fusce bibendum viverra ante pharetra elementum. In sed ligula quam. Vivamus libero turpis, egestas nec
            ex
            quis, accumsan aliquam justo. Morbi in neque nibh. Curabitur sed nulla vitae felis gravida fermentum ac
            non
            nunc. Fusce purus odio, efficitur ut eros at, viverra lobortis augue. Donec sit amet varius nisl. In
            diam
            nulla, lobortis vel accumsan eu, ultricies vitae magna. Suspendisse potenti. Morbi ornare, augue in
            elementum iaculis, ligula odio congue metus, euismod egestas libero enim et dolor. Integer consectetur
            nunc
            in aliquam sodales. Quisque fermentum tortor ornare, interdum elit sed, volutpat nulla. Curabitur
            maximus
            libero nec lectus viverra suscipit. Aliquam consequat odio et lectus accumsan, efficitur faucibus nibh
            tristique.

            Donec consectetur cursus lacus id dapibus. Nulla facilisi. Mauris est enim, sagittis non erat et, auctor
            aliquet neque. Nam pharetra sapien eget porttitor tincidunt. Morbi posuere elementum commodo. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a imperdiet magna,
            sit
            amet hendrerit dolor. Nulla tortor nulla, tincidunt quis neque vestibulum, feugiat lacinia purus. Nulla
            mollis suscipit blandit. Nullam et neque in mi placerat euismod nec non ex. Nam malesuada erat luctus
            sem
            euismod, ac auctor dui scelerisque. Duis et vehicula neque. Nullam sit amet urna tortor. Nunc elementum
            odio
            sed nisl congue, quis gravida nulla egestas.

            Cras ac odio turpis. Pellentesque ullamcorper neque non elit tristique sollicitudin. Praesent efficitur
            dolor urna, id auctor massa dapibus nec. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra,
            per inceptos himenaeos. Aenean sed mauris non mauris malesuada aliquet. Vestibulum metus orci, elementum
            malesuada nisi rutrum, dignissim rhoncus ante. Quisque ante elit, venenatis et ornare sit amet, feugiat
            sit
            amet nunc. Suspendisse eu laoreet erat, at dapibus est. Duis sollicitudin, magna quis malesuada posuere,
            nisi leo elementum nunc, et tristique justo nisi non quam.

            Donec luctus pellentesque enim, sed laoreet arcu faucibus vel. Vivamus ut mi vel dui condimentum
            dignissim
            eu vel tortor. Fusce eleifend dui nec risus sodales, euismod blandit dui iaculis. Integer fermentum id
            velit
            sit amet pulvinar. Nam vitae odio quam. Nam dapibus eros id odio congue aliquam. Nunc consectetur
            aliquam
            ligula non elementum. Donec maximus odio sit amet euismod imperdiet. Class aptent taciti sociosqu ad
            litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Donec elit lacus, porttitor
            at
            ex et, pulvinar blandit quam. Mauris nec justo nec nulla tempus consequat. Sed blandit viverra velit,
            mattis
            sollicitudin libero.
        </motion.div>
    )
};
export default Contact;