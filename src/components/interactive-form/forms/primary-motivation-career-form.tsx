"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, CircleCheckBig } from "lucide-react";
import { useState } from "react";
import { primaryMotivationData } from "../constants";
import useInteractiveForm from "../use-interactive-form-hook";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

const excludedEditable = primaryMotivationData.filter(
  (item) => item !== "Others (please specify)"
);

type Props = {};

function PrimaryMotivationCareer({}: Props) {
  const {
    setFormData,
    nextPage,
    previousPage,
    currentPage,
    form: defaultData,
  } = useInteractiveForm();

  const [motivationData, setMotivationData] = useState(
    defaultData.primaryMotivationCareer || primaryMotivationData
  );
  const [isLoading, setIsLoading] = useState(false);

  const onDragEnd = (dropResult: DropResult) => {
    const { destination, source } = dropResult;

    if (!destination) return;

    const newItems = motivationData
      .toSpliced(source.index, 1)
      .toSpliced(destination.index, 0, motivationData[source.index]);
    setMotivationData(newItems);
  };

  async function onNext() {
    setIsLoading(true);
    setFormData({ primaryMotivationCareer: motivationData });
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    nextPage();
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="space-y-8">
        <Droppable
          droppableId="motivation-career"
          key="motivation-career"
          direction="vertical"
        >
          {(provided) => (
            <div
              className="space-y-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {motivationData.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={cn(
                        "flex items-center gap-x-2 text-clampMd bg-accent hover:bg-border transition-all duration-300 cursor-grab rounded"
                      )}
                    >
                      <span className="p-1 sm:p-2 text-white bg-primary">
                        {index + 1}
                      </span>
                      <span
                        suppressContentEditableWarning
                        contentEditable={!excludedEditable.includes(item)}
                        className={cn(
                          "border-none outline-none w-full h-full text-sm sm:text-clampSm",
                          {
                            "max-w-[220px] border-[2px] px-1 border-dashed border-primary/20":
                              !excludedEditable.includes(item),
                          }
                        )}
                        onBlur={(e) =>
                          setMotivationData((prev) =>
                            prev.map((item, i) => {
                              if (!excludedEditable.includes(item)) {
                                item = e.target.innerText;
                              }
                              return item;
                            })
                          )
                        }
                      >
                        {item}
                      </span>
                    </div>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button
            disabled={currentPage.prev === ""}
            onClick={previousPage}
            variant="secondary"
          >
            <ChevronLeft /> Previous
          </Button>
          <Button
            disabled={currentPage.next === ""}
            type="button"
            isLoading={isLoading}
            onClick={onNext}
          >
            Next <ChevronRight />
          </Button>
        </div>
      </div>
    </DragDropContext>
  );
}

export default PrimaryMotivationCareer;
