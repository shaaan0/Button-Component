import React from "react";
import Button from "./Component/Button";
import "./css/style.css";
import StarIcon from "./Component/StarIcon";

const App = () => {
  return (
    <div className="main">
      <div className="container">
        <div>
          <Button type={"primary"} size={"m"} leftStar={false} rightStar={false} isDisabled={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"primary"} size={"l"} leftStar={true} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"primary"} size={"xl"} leftStar={false} rightStar={true}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"primary"} size={"xxl"} leftStar={false} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"primary"} size={"xxl"} leftStar={true} rightStar={false}>
            
          </Button>
        </div>
      </div>
      <div className="container">
        <div>
          <Button type={"secondary"} size={"m"} leftStar={false} rightStar={false} isDisabled={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"secondary"} size={"l"} leftStar={true} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"secondary"} size={"xl"} leftStar={false} rightStar={true}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"secondary"} size={"xxl"} leftStar={false} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"secondary"} size={"xxl"} leftStar={true} rightStar={false}>
            
          </Button>
        </div>
      </div>
      <div className="container">
        <div>
          <Button type={"tertiary"} size={"m"} leftStar={false} rightStar={false} isDisabled={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"tertiary"} size={"l"} leftStar={true} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"tertiary"} size={"xl"} leftStar={false} rightStar={true}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"tertiary"} size={"xxl"} leftStar={false} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"tertiary"} size={"xxl"} leftStar={true} rightStar={false}>
            
          </Button>
        </div>
      </div>
      <div className="container">
        <div>
          <Button type={"link"} size={"m"} leftStar={false} rightStar={false} isDisabled={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} size={"l"} leftStar={true} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} size={"xl"} leftStar={false} rightStar={true}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} size={"xxl"} leftStar={false} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} size={"xxl"} leftStar={true} rightStar={false}>
            
          </Button>
        </div>
      </div>
      <div className="container">
        <div>
          <Button type={"link"} color={"gray"} size={"m"} leftStar={false} rightStar={false} isDisabled={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} color={"gray"} size={"l"} leftStar={true} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} color={"gray"} size={"xl"} leftStar={false} rightStar={true}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} color={"gray"} size={"xxl"} leftStar={false} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"link"} color={"gray"} size={"xxl"} leftStar={true} rightStar={false}>
            
          </Button>
        </div>
      </div>
      <div className="container">
        <div>
          <Button type={"destructive"} size={"m"} leftStar={false} rightStar={false} isDisabled={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"destructive"} size={"l"} leftStar={true} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"destructive"} size={"xl"} leftStar={false} rightStar={true}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"destructive"} size={"xxl"} leftStar={false} rightStar={false}>
            Button CTA
          </Button>
        </div>
        <div>
        <Button type={"destructive"} size={"xxl"} leftStar={true} rightStar={false}>
            
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
