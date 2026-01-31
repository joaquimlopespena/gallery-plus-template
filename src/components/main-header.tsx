import type { ComponentProps } from "react";
import Container from "./container";
import LogoIcon from "../assets/images/logo.svg?react";
import { Link } from "react-router";
import cx from "classnames";
import Button from "./button";

interface MainHeaderProps extends ComponentProps<typeof Container> {}

export default function MainHeader({className, ...props}: MainHeaderProps) {
    return (
        <Container as="header" className={cx("flex items-center justify-between gap-10", className)} {...props}>
            <Link to="/">
                <LogoIcon className="h-5" />
            </Link>

            <div className="flex items-center gap-3">
                <Button >Nova foto</Button>
                <Button variant="secondary">Criar album</Button>
            </div>
        </Container>
    );
}
