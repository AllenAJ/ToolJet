import React from 'react';
import { Button } from './Components/Button';
import { Image } from './Components/Image';
import { Text } from './Components/Text';
import { Table } from './Components/Table/Table';
import { TextInput } from './Components/TextInput';
import { NumberInput } from './Components/NumberInput';
import { TextArea } from './Components/TextArea';
import { Container } from './Components/Container';
import { Tabs } from './Components/Tabs';
import { RichTextEditor } from './Components/RichTextEditor';
import { DropDown } from './Components/DropDown';
import { Checkbox } from './Components/Checkbox';
import { Datepicker } from './Components/Datepicker';
import { DaterangePicker } from './Components/DaterangePicker';
import { Multiselect } from './Components/Multiselect';
import { Modal } from './Components/Modal';
import { Chart } from './Components/Chart';
import { Map } from './Components/Map/Map';
import { QrScanner } from './Components/QrScanner/QrScanner';
import { ToggleSwitch } from './Components/Toggle';
import { RadioButton } from './Components/RadioButton';
import { StarRating } from './Components/StarRating';
import { Divider } from './Components/Divider';
import { FilePicker } from './Components/FilePicker';
import { PasswordInput } from './Components/PasswordInput';
import { Calendar } from './Components/Calendar';
import { Listview } from './Components/Listview';
import { IFrame } from './Components/IFrame';
import { CodeEditor } from './Components/CodeEditor';
import { Timer } from './Components/Timer';
import { Statistics } from './Components/Statistics';
import { Pagination } from './Components/Pagination';
import { Tags } from './Components/Tags';
import { Spinner } from './Components/Spinner';
import { CircularProgressBar } from './Components/CirularProgressbar';
// import { renderTooltip, getComponentName } from '@/_helpers/appUtils';
import { RangeSlider } from './Components/RangeSlider';
import { Timeline } from './Components/Timeline';
import { SvgImage } from './Components/SvgImage';
import { Html } from './Components/Html';
import { ButtonGroup } from './Components/ButtonGroup';
import { CustomComponent } from './Components/CustomComponent/CustomComponent';
import { VerticalDivider } from './Components/verticalDivider';
import { PDF } from './Components/PDF';
import { ColorPicker } from './Components/ColorPicker';
import { KanbanBoard } from './Components/KanbanBoard/KanbanBoard';
import { Kanban } from './Components/Kanban/Kanban';
import { Steps } from './Components/Steps';
import { TreeSelect } from './Components/TreeSelect';
import { Icon } from './Components/Icon';
import { Link } from './Components/Link';
import { Form } from './Components/Form/Form';
import { BoundedBox } from './Components/BoundedBox/BoundedBox';
// eslint-disable-next-line import/no-unresolved
import { diff } from 'deep-object-diff';
import _ from 'lodash';

const AllComponents = {
  Button,
  Image,
  Text,
  TextInput,
  NumberInput,
  Table,
  TextArea,
  Container,
  Tabs,
  RichTextEditor,
  DropDown,
  Checkbox,
  Datepicker,
  DaterangePicker,
  Multiselect,
  Modal,
  Chart,
  Map,
  QrScanner,
  ToggleSwitch,
  RadioButton,
  StarRating,
  Divider,
  FilePicker,
  PasswordInput,
  Calendar,
  IFrame,
  CodeEditor,
  Listview,
  Timer,
  Statistics,
  Pagination,
  Tags,
  Spinner,
  CircularProgressBar,
  RangeSlider,
  Timeline,
  SvgImage,
  Html,
  ButtonGroup,
  CustomComponent,
  VerticalDivider,
  PDF,
  ColorPicker,
  KanbanBoard,
  Kanban,
  Steps,
  TreeSelect,
  Link,
  Icon,
  Form,
  BoundedBox,
};

function DynamicComponentRenderBox({ shoudRender, componentType, ...restProps }) {
  if (!shoudRender) {
    return null;
  }

  const Component = AllComponents[componentType];

  return <Component {...restProps} />;
}

export default React.memo(DynamicComponentRenderBox, (prevProps, nextProps) => {
  const diffObj = diff(prevProps?.component, nextProps?.component);
  const didWidgetLayoutChange = prevProps?.height !== nextProps?.height || prevProps?.width !== nextProps?.width;

  //   console.log('arpit:: diff', { diffObj, didWidgetLayoutChange });

  return _.isEmpty(diffObj) || didWidgetLayoutChange;
});
