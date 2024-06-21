import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function UserCardSkeleton() {
  return (
    <Skeleton height={280} baseColor="#0c0a09" highlightColor="#0d0d0d" style={{borderRadius: 16, border:"1px solid #222"}}/>
  )
}
