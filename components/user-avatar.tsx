import { cn } from "@/lib/utils";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface UserAvatarProps {
    src?: string;
    className?: string;
}

const UserAvatar = ({ src, className }: UserAvatarProps) => {
    return (
        <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
            <AvatarImage src={src} />
        </Avatar>
    );
};

export default UserAvatar;
