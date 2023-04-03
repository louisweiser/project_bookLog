import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  HomeSVG,
  LibrarySVG,
  ReadingSVG,
  CreateSVG,
  CreateSVGActive,
  LibrarySVGActive,
  ReadingSVGActive,
  HomeSVGActive,
} from "@/public/svgs/navigationbar.js";

const Navbar = styled.nav`
  /*layout*/
  position: fixed;
  bottom: 0;
  /*dimension*/
  width: 100%;
  height: 53px;
  /*style*/
  background-color: #03314b;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const NavbarList = styled.ul`
  /*layout*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*dimension*/
  margin: 0 30px;
  padding: 0;
  height: 100%;
  /*style*/
  list-style: none;
`;

const NavbarListItem = styled.li`
  /*layout*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*dimension*/
  margin-top: 5px;
  width: 45px;
  height: 40px;
  /*style*/
  cursor: pointer;

  &:active {
    /*style*/
    transform: scale(0.9);
  }
`;

const Text = styled.h5`
  /*layout*/
  text-align: center;
`;

const Navigation = () => {
  const router = useRouter();

  return (
    <Navbar>
      <NavbarList>
        <Link href="/home">
          <NavbarListItem>
            {router.pathname === "/home" ? <HomeSVGActive /> : <HomeSVG />}
            <Text>Home</Text>
          </NavbarListItem>
        </Link>
        <Link href="/library">
          <NavbarListItem>
            {router.pathname === "/library" ? (
              <LibrarySVGActive />
            ) : (
              <LibrarySVG />
            )}
            <Text>Library</Text>
          </NavbarListItem>
        </Link>
        <Link href="/reading">
          <NavbarListItem>
            {router.pathname === "/reading" ? (
              <ReadingSVGActive />
            ) : (
              <ReadingSVG />
            )}
            <Text>Read</Text>
          </NavbarListItem>
        </Link>
        <Link href="/create">
          <NavbarListItem>
            {router.pathname === "/create" ? (
              <CreateSVGActive />
            ) : (
              <CreateSVG />
            )}
            <Text>Create</Text>
          </NavbarListItem>
        </Link>
      </NavbarList>
    </Navbar>
  );
};

export default Navigation;
