import { Form,Stack,Row,Col,Button } from "react-bootstrap"
import CreatableReactSelect from "react-select/creatable"
import { Link } from "react-router-dom"
import { useRef,FormEvent,useState  } from "react"
import { Notedata } from "../App"

type NoteFormProps = {
    onSubmit: (data: Notedata) => void;
};

export function NoteForm ({ onSubmit }:NoteFormProps ) { 

    const titleref = useRef<HTMLInputElement>(null);
    const markdownref = useRef<HTMLTextAreaElement>(null);
    const [SelecttedTags,setSelectedTags] = useState<Tag[]>([]);

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        onSubmit({
            title:titleref.current!.value,
            markdown:markdownref.current!.value,
            tags:[]
        })
    }    

    return <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
            <Row>
                <Col>
                    <Form.Group controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleref} required/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <CreatableReactSelect value={
                            SelecttedTags.map(tag => {
                                return {
                                    label:tag.label,
                                    value:tag.id
                                }
                            })}
                            onChange={tags => {
                                setSelectedTags(tags.map(tag => {
                                    return {
                                        label: tag.label,
                                        id: tag.value
                                    };
                                }));
                            }}
                        isMulti/>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="markdown">
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={markdownref} required as="textarea" rows={15}/>
            </Form.Group>
            <Stack direction="horizontal" gap={2} className="justify-content-end">
                <Button type="submit" variant="primary">Save</Button>
                <Link to="..">
                <Button type="button" variant="outline-secondary">Cancle</Button>
                </Link>
            </Stack>
        </Stack>
    </Form>
}