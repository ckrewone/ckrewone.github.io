import {
  faAngleDown,
  faCheckSquare,
  faEdit,
  faEllipsisV,
  faFolder, faGripLines,
  faInfoCircle,
  faList
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle, faTimesCircle, faSquare } from '@fortawesome/free-regular-svg-icons'

export const ICONS = {
  'checkboxOn': {
    component: FontAwesomeIcon,
    props: {
      icon: faCheckSquare
    }
  },
  'checkboxOff': {
    component: FontAwesomeIcon,
    props: {
      icon: faSquare
    }
  },
  'menu': {
    component: FontAwesomeIcon,
    props: {
      icon: faEllipsisV
    }
  },
  'actionList': {
    component: FontAwesomeIcon,
    props: {
      icon: faList
    }
  },
  'edit': {
    component: FontAwesomeIcon,
    props: {
      icon: faEdit
    }
  },
  'info': {
    component: FontAwesomeIcon,
    props: {
      icon: faInfoCircle
    }
  },
  'folder': {
    component: FontAwesomeIcon,
    props: {
      icon: faFolder
    }
  },
  'checkCircle': {
    component: FontAwesomeIcon,
    props: {
      icon: faCheckCircle
    }
  },
  'timeCircle': {
    component: FontAwesomeIcon,
    props: {
      icon: faTimesCircle
    }
  },
  'gripLines': {
    component: FontAwesomeIcon,
    props: {
      icon: faGripLines
    }
  },
  'angleDown': {
    component: FontAwesomeIcon,
    props: {
      icon: faAngleDown
    }
  }
}
