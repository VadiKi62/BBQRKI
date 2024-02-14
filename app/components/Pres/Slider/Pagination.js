import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SwiperButton = styled(IconButton)`
  cursor: pointer;
  &.next-ctrl {
    /* Add specific styles for next control button */
  }
  &.prev-ctrl {
    /* Add specific styles for previous control button */
  }
`;

const SwiperBox = styled(Box)`
  position: static;

  .setone.setwo {
    .swiper-nav-ctrl {
      border-radius: 50%;
    }
    .next-ctrl {
      position: absolute;
      top: 50%;
      right: 30px;
    }
    .prev-ctrl {
      position: absolute;
      top: 50%;
      left: 30px;
    }
  }
`;
function Pagination() {
  return (
    <>
      <SwiperBox>
        <SwiperButton className="next-ctrl">
          <ChevronRightIcon />
        </SwiperButton>
        <SwiperButton className="prev-ctrl">
          <ChevronLeftIcon />
        </SwiperButton>
      </SwiperBox>
      <div className="swiper-pagination top botm"></div>
    </>
  );
}

export default Pagination;
