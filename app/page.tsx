import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant="locked">locked</Button>
      <Button variant="default">default</Button>
      <Button variant="primary">primary</Button>
      <Button variant="primaryOutline">primaryOutline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="secondaryOutline">secondaryOutline</Button>
      <Button variant="danger">danger</Button>
      <Button variant="dangerOutline">dangerOutline</Button>
      <Button variant="super">super</Button>
      <Button variant="superOutline">superOutline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="sidebar">sidebar</Button>
      <Button variant="sidebarOutline">sidebarOutline</Button>
    </div>

  );
}
