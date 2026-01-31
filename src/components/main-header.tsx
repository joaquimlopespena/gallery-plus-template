import type { ComponentProps } from "react";
import Container from "./container";
import LogoIcon from "../assets/images/logo.svg?react";
import { Link } from "react-router";
import cx from "classnames";
import Button from "./button";
import PhotosSearch from "./photos-search";
import Divider from "./divider";
import PhotoNewDialog from "../contexts/photos/components/photo-new-dialog";
import AlbumNewDialog from "../contexts/albums/components/album-new-dialog";

interface MainHeaderProps extends ComponentProps<typeof Container> {}

export default function MainHeader({className, ...props}: MainHeaderProps) {
    return (
        <Container as="header" className={cx("flex items-center justify-between gap-10", className)} {...props}>
            <Link to="/">
                <LogoIcon className="h-5" />
            </Link>
            <PhotosSearch />
            <Divider orientation="vertical" className="h-10" />

            <div className="flex items-center gap-3">
                <PhotoNewDialog trigger={<Button>Nova foto</Button>} />
                <AlbumNewDialog
          trigger={<Button variant="secondary">Criar álbum</Button>}
        />
            </div>
        </Container>
    );
}
