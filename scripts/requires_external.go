// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: BUSL-1.1

package scripts

import (
	_ "github.com/bufbuild/buf/cmd/buf"
	_ "github.com/client9/misspell/cmd/misspell"
	_ "github.com/golangci/revgrep/cmd/revgrep"
	_ "golang.org/x/tools/cmd/goimports"
	_ "honnef.co/go/tools/cmd/staticcheck"
	_ "mvdan.cc/gofumpt"
)
